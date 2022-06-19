var robuxID = document.getElementById("nav-robux-amount");
function AskForRobux() {
    var robuxAmount = prompt ("How much robux do you want?")
    console.log(robuxAmount)
    robuxID.innerHTML = robuxAmount;
    if ( robuxAmount = 'exit' ) {
        history.back()
    }
}
AskForRobux()