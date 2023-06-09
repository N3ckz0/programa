function formatNumber(input) {
    let value = input.value.replace(/,/g, '');
    value = Number(value).toLocaleString();
    input.value = value;
}

function verifyAge(){
    let birthdate = document.getElementById('birthdate');
    const date = new Date(birthdate.value);
    const nowDate = new Date();
    const diference = nowDate.getTime() - date.getTime();
    const age = Math.floor(diference / (1000 * 60 * 60 * 24 * 365.25));
    return age;
}

function verifyHistory(){
    const history = document.querySelector('input[name="history"]:checked').value;
    return history;
}

function getAmount(){
    let alert = document.getElementById('alert');
    let amount = document.getElementById('amount');
    let character = ",";
    let amountValue = amount.value;
    let value = parseInt(amountValue.replace(new RegExp(character, "g"), ""));

    return value;
}

function getIncome(){
    let income = document.getElementById('income');
    let character = ",";
    let incomeValue = income.value;
    let value = parseInt(incomeValue.replace(new RegExp(character, "g"), ""));

    return value;
}



function verifyData(){
    let alert = document.getElementById('alert');

    if(verifyHistory()=='si'){
        let history = true;
    }else{
        let history = false;
    }

    let income = getIncome();
    let amount = getAmount();
    let age = verifyAge();
    /*alert.innerHTML = '<div class="alert alert-success" role="alert" id="alert">Sorry, you are underage</div>';*/
    if(verifyAge()>=18){

        if(income>=5000 && income<10000){
            alert.innerHTML = '<div class="alert alert-success" role="alert" id="alert">Sorry, you are underage</div>';
            if(history){
                if(amount<=15000){
                    alert.innerHTML = '<div class="alert alert-success" role="alert" id="alert">Income accepted</div>';
                }else{
                    alert.innerHTML = '<div class="alert alert-danger" role="alert" id="alert">Rejected income</div>';
                }
            }else{
                if(amount<=7500){
                    alert.innerHTML = '<div class="alert alert-success" role="alert" id="alert">Income accepted</div>';
                }else{
                    alert.innerHTML = '<div class="alert alert-danger" role="alert" id="alert">Rejected income</div>';
                }
            }
        }else if(income>=10000 && income<25000){
            if(history){
                if(amount<=25000){
                    alert.innerHTML = '<div class="alert alert-success" role="alert" id="alert">Income accepted</div>';
                }else{
                    alert.innerHTML = '<div class="alert alert-danger" role="alert" id="alert">Rejected income</div>';
                }
            }else{
                if(amount<=12000){
                    alert.innerHTML = '<div class="alert alert-success" role="alert" id="alert">Income accepted</div>';
                }else{
                    alert.innerHTML = '<div class="alert alert-danger" role="alert" id="alert">Rejected income</div>';
                }
            }
        }else if(income>=25000 && income<50000){
            if(history){
                if(amount<=50000){
                    alert.innerHTML = '<div class="alert alert-success" role="alert" id="alert">Income accepted</div>';
                }else{
                    alert.innerHTML = '<div class="alert alert-danger" role="alert" id="alert">Rejected income</div>';
                }
            }else{
                if(amount<=30000){
                    alert.innerHTML = '<div class="alert alert-success" role="alert" id="alert">Income accepted</div>';
                }else{
                    alert.innerHTML = '<div class="alert alert-danger" role="alert" id="alert">Rejected income</div>';
                }
            }
        }else if(income>=50000 && income<100000){
            if(history){
                if(amount<=100000){
                    alert.innerHTML = '<div class="alert alert-success" role="alert" id="alert">Income accepted</div>';
                }else{
                    alert.innerHTML = '<div class="alert alert-danger" role="alert" id="alert">Rejected income</div>';
                }
            }else{
                if(amount<=40000){
                    alert.innerHTML = '<div class="alert alert-success" role="alert" id="alert">Income accepted</div>';
                }else{
                    alert.innerHTML = '<div class="alert alert-danger" role="alert" id="alert">Rejected income</div>';
                }
            }
        }else{
            alert.innerHTML = '<div class="alert alert-danger" role="alert" id="alert">Insert a value with limit of $49,999</div>';
        }

    }
    else{
        alert.innerHTML = '<div class="alert alert-danger" role="alert" id="alert">Sorry, you are underage</div>';
    }


}