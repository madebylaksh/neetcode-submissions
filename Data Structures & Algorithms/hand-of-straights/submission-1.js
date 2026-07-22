class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        // what I'd do IRL = take min, put in a group
        // take next min, if consecutive add behind, otherwise new grp.
        if (hand.length % groupSize !==0) return false;
        const groups = hand.length/groupSize;
        let formedGroups = 0;
        let lastCards = [];
        let updates = [];
        hand.sort((a,b)=>a-b);
        for (let card of hand) {
            const idx = lastCards.indexOf(card-1);
            if (idx!==-1) {
                lastCards[idx] =  card;
                updates[idx]+=1;
                if (updates[idx]===groupSize) {lastCards[idx] = Infinity;}
            }
            else {
                if (formedGroups === groups) return false;
                else {
                    formedGroups++;
                    lastCards.push(card);
                    updates.push(1);
                }
            }
        }
        return true;
    }
}
