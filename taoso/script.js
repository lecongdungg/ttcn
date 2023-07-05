var excludedNumbers = [1]; // Mảng chứa số 1 ban đầu

document.getElementById("add-excluded-number-button").addEventListener("click", function() {
    var excludedInputs = document.getElementById("excluded-inputs");
    var newInput = document.createElement("div");
    newInput.className = "input-group";
    newInput.innerHTML = "<label for='excluded-number'><p>SỐ CẦN LOẠI TRỪ</p></label><input type='number' class='excluded-number-input' name='excluded-number'>";
    excludedInputs.appendChild(newInput);
});

document.getElementById("generate-button").addEventListener("click", function() {
    var minNumber = parseInt(document.getElementById("min-number").value);
    var maxNumber = parseInt(document.getElementById("max-number").value);
    var excludedInputs = document.getElementsByClassName("excluded-number-input");

    // Đặt lại mảng số cần loại trừ
    excludedNumbers = [0];

    for (var i = 0; i < excludedInputs.length; i++) {
        var excludedNumber = parseInt(excludedInputs[i].value);
        if (!isNaN(excludedNumber)) {
            excludedNumbers.push(excludedNumber);
        }
    }

    var resultDiv = document.getElementById("result");

    var numberArray = [];
    for (var i = minNumber; i <= maxNumber; i++) {
        numberArray.push(i);
    }

    // Loại bỏ các số được nhập vào
    excludedNumbers.forEach(function(excludedNumber) {
        numberArray = numberArray.filter(function(number) {
            return number !== excludedNumber;
        });
    });

    if (numberArray.length === 0) {
        resultDiv.innerHTML = "<span style='font-weight: bold; color: black;'>Không có số phù hợp trong phạm vi đã cho.</span>";
    } else {
        var randomNumberIndex = Math.floor(Math.random() * numberArray.length);
        var randomNumber = numberArray[randomNumberIndex];

        // Xóa số đã chọn khỏi mảng để tránh hiển thị lại
        numberArray.splice(randomNumberIndex, 0);

        resultDiv.innerHTML = "<span style='font-weight: bold; color: black;'>Số ngẫu nhiên của bạn là: </span><span style='font-weight: bold; color: red;'>" + randomNumber + "</span><br><br>" + "<span style='font-weight: bold; color: black;'>Your random number is: </span><span style='font-weight: bold; color: red;'>" + randomNumber + "</span>";
    }
});
