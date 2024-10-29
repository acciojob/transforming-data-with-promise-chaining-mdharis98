//your JS code here. If required.
document.getElementById("btn").addEventListener("click", () => {
  const outputDiv = document.getElementById("output");
  const input = parseInt(document.getElementById("ip").value, 10);

  // Start the promise chain
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isNaN(input)) {
        outputDiv.textContent = `Result: ${input}`;
        resolve(input);
      } else {
        reject("Invalid input");
      }
    }, 2000);
  })
  .then(number => {
    return new Promise(resolve => {
      setTimeout(() => {
        const result = number * 2;
        outputDiv.textContent = `Result: ${result}`;
        resolve(result);
      }, 1000);
    });
  })
  .then(number => {
    return new Promise(resolve => {
      setTimeout(() => {
        const result = number - 3;
        outputDiv.textContent = `Result: ${result}`;
        resolve(result);
      }, 1000);
    });
  })
  .then(number => {
    return new Promise(resolve => {
      setTimeout(() => {
        const result = number / 2;
        outputDiv.textContent = `Result: ${result}`;
        resolve(result);
      }, 1000);
    });
  })
  .then(number => {
    return new Promise(resolve => {
      setTimeout(() => {
        const result = number + 10;
        outputDiv.textContent = `Result: ${result}`;
        resolve(result);
      }, 1000);
    });
  })
  .then(finalResult => {
    outputDiv.textContent = `Final Result: ${finalResult}`;
  })
  .catch(error => {
    outputDiv.textContent = `Error: ${error}`;
  });
});
