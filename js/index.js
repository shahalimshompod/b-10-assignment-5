// Donation and history button funtionalities //
document.getElementById('history-btn').addEventListener('click', function(){
    historyBtnColorChange('history-btn')
})

document.getElementById('donation-btn').addEventListener('click', function(){
    donationBtnColorChange('donation-btn')
})

// getting input numbers
document.getElementById('card-one-donate-now-btn').addEventListener('click', function(){
    const donatedAmount = getInputValues('input-1');
    const accountBalance = getTextNumberValues('account-balance')
    const CardDonationAmount = getTextNumberValues('card-1-balance')
    const currentAccountBalance = accountBalance - donatedAmount;
    const currentCardDonationAmount = CardDonationAmount + donatedAmount;

    // current date and times
    const currentDate = new Date();

    if((typeof donatedAmount === 'number' && donatedAmount > 0) && donatedAmount <= accountBalance){
        document.getElementById('account-balance').innerText = currentAccountBalance;
        document.getElementById('card-1-balance').innerText = currentCardDonationAmount;
        document.getElementById('input-1').value = '';
        
        // creating element for history section
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="border border-1 border-[#111111]/10 rounded-lg py-6 px-10 mb-10">
                <p class="text-xl font-bold text-black mb-6">96500 Taka is Donated for famine-2024 at Feni, Bangladesh</p>
                <p class="text-base font-light text-[#111111]/70">Date : ${currentDate}</p>
            </div>
        `
        document.getElementById('history-part').appendChild(div);

        // modal showing

        my_modal_1.showModal();
    }
    else{
        alert('Invalid Amount')
    }
})