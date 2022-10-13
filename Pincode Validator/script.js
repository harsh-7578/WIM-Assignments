document.querySelector("#validatePin").addEventListener("click", async () => {
  let pin = document.querySelector("#pincode").value;
  try{
  const data = await getDetails(pin);
  let city = data[0].PostOffice[0].Name;
  let state = data[0].PostOffice[0].Circle;

  document.getElementById("city").value = city;
  document.getElementById("state").value = state;
  }
  catch(e)
  {
    alert('Please check pincode entered');
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("pincode").value = "";
  }
});
const getDetails = async (pin) => {
  const base = "https://api.postalpincode.in/pincode/";
  const query = `${pin}`;
  try {
    const response = await fetch(base + query);
    const data = await response.json();
    return data;
  }
  catch (e) {
    console.log("Error Hai Bhai");
  }
  
};
