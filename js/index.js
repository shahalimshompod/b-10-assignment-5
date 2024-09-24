// Donation and history button functionalities //
document.getElementById('history-btn').addEventListener('click', function () {
    historyBtnColorChange('history-btn')
})

document.getElementById('donation-btn').addEventListener('click', function () {
    donationBtnColorChange('donation-btn')
})



// Functionality for each card - card-1
document.getElementById('donate-btn-1').addEventListener('click', function () {
    const donatedAmount = getInputValues('input-1');
    const accountBalance = getTextNumberValues('account-balance');
    const cardDonationAmount = getTextNumberValues('card-1-balance');
    const currentAccountBalance = accountBalance - donatedAmount;
    const currentCardDonationAmount = cardDonationAmount + donatedAmount;
    const innerTexts = getInnerText('noakhali-flood');

    // Current date and time
    const currentDate = new Date();

    // Conditions
    if (isNaN(donatedAmount)) {
        alert('The amount must be a number');
        document.getElementById('input-1').value = '';
    } else if (donatedAmount < 0) {
        alert('Amount must be a positive number');
        document.getElementById('input-1').value = '';
    } else if (donatedAmount === 0) {
        alert('Please provide a valid amount');
        document.getElementById('input-1').value = '';
    } else if (donatedAmount > accountBalance) {
        alert('Insufficient Balance');
        document.getElementById('input-1').value = '';
    } else {
        // Update balance
        document.getElementById('account-balance').innerText = currentAccountBalance;
        document.getElementById('card-1-balance').innerText = currentCardDonationAmount;
        document.getElementById('input-1').value = '';

        // Create element for history section
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="mx-3 md:mx-0 py-2 px-2 md:py-6 md:px-10 mb-4 border border-1 border-[#111111]/10 rounded-lg">
            <p class="text-xl font-bold text-black mb-6">${donatedAmount} Taka is Donated for ${innerTexts}</p>
            <p class="text-base font-light text-[#111111]/70">Date : ${currentDate}</p>
        </div>
        `;
        document.getElementById('history-part').appendChild(div);

        // Transaction conduction in the history
        document.getElementById('transactions-conduct').classList.add('hidden')
        document.getElementById('transaction-history').classList.remove('hidden')

        //showing donatedAmount in modal
        document.getElementById('send-money-show-modal-1').innerText = donatedAmount;

        // Show modal
        document.getElementById('my_modal_1').showModal();
    }
})



// Functionality for card-2
document.getElementById('donate-btn-2').addEventListener('click', function () {
    const donatedAmount = getInputValues('input-2');
    const accountBalance = getTextNumberValues('account-balance');
    const cardDonationAmount = getTextNumberValues('card-2-balance');
    const currentAccountBalance = accountBalance - donatedAmount;
    const currentCardDonationAmount = cardDonationAmount + donatedAmount;
    const innerTexts = getInnerText('feni-flood');

    // Current date and time
    const currentDate = new Date();

    // Conditions
    if (isNaN(donatedAmount)) {
        alert('The amount must be a number');
        document.getElementById('input-2').value = '';
    } else if (donatedAmount < 0) {
        alert('Amount must be a positive number');
        document.getElementById('input-2').value = '';
    } else if (donatedAmount === 0) {
        alert('Please provide a valid amount');
        document.getElementById('input-2').value = '';
    } else if (donatedAmount > accountBalance) {
        alert('Insufficient Balance');
        document.getElementById('input-2').value = '';
    } else {
        // Update balance
        document.getElementById('account-balance').innerText = currentAccountBalance;
        document.getElementById('card-2-balance').innerText = currentCardDonationAmount;
        document.getElementById('input-2').value = '';

        // Create element for history section
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="mx-3 md:mx-0 py-2 px-2 md:py-6 md:px-10 mb-4 border border-1 border-[#111111]/10 rounded-lg">
            <p class="text-xl font-bold text-black mb-6">${donatedAmount} Taka is Donated for ${innerTexts}</p>
            <p class="text-base font-light text-[#111111]/70">Date : ${currentDate}</p>
        </div>
        `;
        document.getElementById('history-part').appendChild(div);

        //showing donatedAmount in modal
        document.getElementById('send-money-show-modal-2').innerText = donatedAmount;

        // Show modal
        document.getElementById('my_modal_2').showModal();
    }
})



// Functionality for card-3
document.getElementById('donate-btn-3').addEventListener('click', function () {
    const donatedAmount = getInputValues('input-3');
    const accountBalance = getTextNumberValues('account-balance');
    const cardDonationAmount = getTextNumberValues('card-3-balance');
    const currentAccountBalance = accountBalance - donatedAmount;
    const currentCardDonationAmount = cardDonationAmount + donatedAmount;
    const innerTexts = getInnerText('quota-movement');

    // Current date and time
    const currentDate = new Date();

    // Conditions
    if (isNaN(donatedAmount)) {
        alert('The amount must be a number');
        document.getElementById('input-3').value = '';
    } else if (donatedAmount < 0) {
        alert('Amount must be a positive number');
        document.getElementById('input-3').value = '';
    } else if (donatedAmount === 0) {
        alert('Please provide a valid amount');
        document.getElementById('input-3').value = '';
    } else if (donatedAmount > accountBalance) {
        alert('Insufficient Balance');
        document.getElementById('input-3').value = '';
    } else {
        // Update balance
        document.getElementById('account-balance').innerText = currentAccountBalance;
        document.getElementById('card-3-balance').innerText = currentCardDonationAmount;
        document.getElementById('input-3').value = '';

        // Create element for history section
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="mx-3 md:mx-0 py-2 px-2 md:py-6 md:px-10 mb-4 border border-1 border-[#111111]/10 rounded-lg">
            <p class="text-xl font-bold text-black mb-6">${donatedAmount} Taka is Donated for ${innerTexts}</p>
            <p class="text-base font-light text-[#111111]/70">Date : ${currentDate}</p>
        </div>
        `;
        document.getElementById('history-part').appendChild(div);

        //showing donatedAmount in modal
        document.getElementById('send-money-show-modal-3').innerText = donatedAmount;

        // Show modal
        document.getElementById('my_modal_3').showModal();


    }
})



// for blog button
document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = 'https://shahalimshompod.github.io/b-10-assignment-5/blog.html'
})

// Clear all button clicked in history tab
document.getElementById('clear-all-btn').addEventListener('click', function(){
    clearAllBtn('transaction-history');
    document.getElementById('history-part').innerHTML = '';
    document.getElementById('transactions-conduct').classList.remove('hidden');
})