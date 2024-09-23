// Donation and history button funtionalities //
document.getElementById('history-btn').addEventListener('click', function(){
    historyBtnColorChange('history-btn')
})

document.getElementById('donation-btn').addEventListener('click', function(){
    donationBtnColorChange('donation-btn')
})

//funtionality for each cards   card-1
document.getElementById('donate-btn-1').addEventListener('click', function(){
    const donatedAmount = getInputValues('input-1');
    const accountBalance = getTextNumberValues('account-balance')
    const CardDonationAmount = getTextNumberValues('card-1-balance')
    const currentAccountBalance = accountBalance - donatedAmount;
    const currentCardDonationAmount = CardDonationAmount + donatedAmount;
    const innerTexts = getInnerText('noakhali-flood');

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
                <p class="text-xl font-bold text-black mb-6">${donatedAmount} Taka is Donated for ${innerTexts}</p>
                <p class="text-base font-light text-[#111111]/70">Date : ${currentDate}</p>
            </div>
        `
        document.getElementById('history-part').appendChild(div);

        // showing modal
        document.getElementById('my_modal_1').showModal();
    }
    else{
        alert('Invalid Amount')
    }
})

// card-2
document.getElementById('donate-btn-2').addEventListener('click', function(){
    const donatedAmount = getInputValues('input-2');
    const accountBalance = getTextNumberValues('account-balance')
    const CardDonationAmount = getTextNumberValues('card-2-balance')
    const currentAccountBalance = accountBalance - donatedAmount;
    const currentCardDonationAmount = CardDonationAmount + donatedAmount;
    const innerTexts = getInnerText('feni-flood');

    // current date and times
    const currentDate = new Date();

    // condition
    if(typeof donatedAmount !== 'number'){
        alert('The amount should be number')
    }else if(donatedAmount < 0){
        alert('Amount must be a positive number')
    }else if(donatedAmount >= accountBalance){
        alert('Donation cannot greater than Account Balance')
    }else{
        document.getElementById('account-balance').innerText = currentAccountBalance;
        document.getElementById('card-2-balance').innerText = currentCardDonationAmount;
        document.getElementById('input-2').value = '';
        
        // creating element for history section
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="border border-1 border-[#111111]/10 rounded-lg py-6 px-10 mb-10">
                <p class="text-xl font-bold text-black mb-6">${donatedAmount} Taka is Donated for ${innerTexts}</p>
                <p class="text-base font-light text-[#111111]/70">Date : ${currentDate}</p>
            </div>
        `
        document.getElementById('history-part').appendChild(div);

        // showing modal
        document.getElementById('my_modal_2').showModal();
    }
})
