// Write your cade below:
function caclRemaindar(i,j) {
    return i%j;
};

function caclSum(is) {
    var sum=0;
    for(var i=0;i<is.length;i++){
        sum+=is[i];
    }
    return sum;
};

function caclSumInConditon(numArray,num) {
    var sum=0;
    for(var i=0;i<numArray.length;i++){
        if(numArray[i]<num){
            sum+=numArray[i];
        }
    }
    return sum;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}