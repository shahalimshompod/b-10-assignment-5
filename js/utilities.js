// donation and history button functionalities //
function historyBtnColorChange(id) {
    document.getElementById('donation-btn').classList.remove('bg-[#B4F461]')
    document.getElementById('history-btn').classList.add('bg-[#B4F461]');

    document.getElementById('donation-part').classList.add('hidden')
    document.getElementById('history-container').classList.remove('hidden')
    document.getElementById('history-part').classList.remove('hidden')
    document.getElementById('footer').classList.add('hidden')

}

function donationBtnColorChange(id) {
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]')
    document.getElementById('donation-btn').classList.add('bg-[#B4F461]')

    document.getElementById('donation-part').classList.remove('hidden')
    document.getElementById('history-container').classList.add('hidden')
    document.getElementById('history-part').classList.add('hidden')
}



// getting input values
function getInputValues(id) {
    const inputValues = document.getElementById(id).value;
    const valueToNumber = parseFloat(inputValues);
    return valueToNumber;
}



// getting text number values 
function getTextNumberValues(id) {
    const textNumberValues = document.getElementById(id).innerText;
    const textValueToNumber = parseFloat(textNumberValues);
    return textValueToNumber
}



// getting innerText
function getInnerText(id) {
    const theInnerText = document.getElementById(id).innerText;
    return theInnerText;
}

// Clear all button clicked in history tab
function clearAllBtn(id){
    const clearDivElements = document.getElementById(id);
    clearDivElements.classList.add('hidden')
}
