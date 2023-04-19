const cityName = document.getElementById('cityName');
const submitBtn= document.getElementById('submitBtn');
const city_name = document.getElementById("city_name");
const temp_status= document.getElementById("temp_status");
const temp_real =document.getElementById("temp_real");
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event)=>{
    event.preventDefault()
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText =`plz write name before search`;
        datahide.classList.add('data_hide')
    }else{
        try{
            let url= `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9db7954a162bc902e74c41234bb1064f`
            const res = await fetch(url);
            const data= await res.json();
            const arrData=[data];
            city_name.innerText =   `${arrData[0].name}, ${arrData[0].sys.country}, `;
            temp_real.innerText= arrData[0].main.temp;
            const temomood = arrData[0].weather[0].main
            //condotion to chech suuny or cloudy
            if(temomood == "Clear"){
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68' ></i>";
            }else if(temomood == "Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6' ></i>";
            }else if(temomood == "Rain"){
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be' ></i>";
            }else{
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6' ></i>";
            }
            datahide.classList.remove('data_hide')
        }catch{
            city_name.innerText =`plz enter city name properly `
            datahide.classList.add('data_hide')
        }

    }
}
submitBtn.addEventListener('click',getInfo)