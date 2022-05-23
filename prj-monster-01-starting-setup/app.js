function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            enemyHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: [],
        };
    },
    methods: {
        attackEnemy() {
            this.currentRound++;
            const attackDamage = getRandomValue(5, 12);
            this.enemyHealth -= attackDamage;
            this.addLogMessage('player', 'attack', attackDamage);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackDamage = getRandomValue(8, 15);
            this.playerHealth -= attackDamage;
            this.addLogMessage('enemy', 'attack', attackDamage);
        },
        specialAttackEnemy() {
            this.currentRound++;
            const attackDamage = getRandomValue(10, 25);
            this.enemyHealth -= attackDamage;
            this.addLogMessage('player', 'attack', attackDamage);
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            }
            else {
                this.playerHealth += healValue;
            }
            this.addLogMessage('player', 'heal', healValue);
            this.attackPlayer();
        },
        startGame() {
            this.playerHealth = 100;
            this.enemyHealth = 100;
            this.winner = null;
            this.currentRound = null;
            this.logMessages = [];
        },
        playerSurrenders() {
            this.winner = 'enemy';
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        },
    },
    computed: {
        enemyBarStyles() {
            if (this.enemyHealth < 0) {
                return { width: '0%' };
            }
            return {width: this.enemyHealth +'%'};
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return { width: '0%' };
            }
            return {width: this.playerHealth + '%'};
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        },
    },
    watch: {
        playerHealth(value) {
            if (value <=0 && this.enemyHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'enemy';
            }
        },
        enemyHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player';
            }
        }
    }
});

app.mount('#game');