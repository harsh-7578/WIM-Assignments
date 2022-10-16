

const button1=document.querySelector('.btn1')
const button2=document.querySelector('.btn2')
const button3=document.querySelector('.btn3')

const canva1=document.querySelector('.cb1')
const canva2=document.querySelector('.cb2')
const canva3=document.querySelector('.cb3')

button1.addEventListener('click',()=>{
    if(canva1.classList.contains('display'))
         canva1.classList.remove('display');
         else{
            canva1.classList.add('display');
        }
})

button2.addEventListener('click',()=>{
    if(canva2.classList.contains('display'))
         canva2.classList.remove('display');
         else{
            canva2.classList.add('display');
        }
})

button3.addEventListener('click',()=>{
    if(canva3.classList.contains('display'))
         canva3.classList.remove('display');
    else{
        canva3.classList.add('display');
    }
})
  const chartData='http://127.0.0.1:5500/crime_data_rape.csv';
  const chartData2='http://127.0.0.1:5500/crime_data_auto_theft.csv'
  const chartData3='http://127.0.0.1:5500/crime_data_kidnap.csv'
  d3.csv(chartData).then(function(datapoints)
  {
    console.log(datapoints);
    const year=[];
    const totalVictims=[];
    for(let i=0;i<datapoints.length;i++)
    {
        year.push(datapoints[i].Year);
        totalVictims.push(datapoints[i].Rape_Cases_Reported);
    }
    const data = {
        labels: year,
        datasets: [{
          label: 'Rape Cases Reported In Maharashtra',
          data: totalVictims,
          backgroundColor: [
            'red'
          ],
          borderColor: [
            'black'
          ],
          borderWidth: 1
        }]
      };
      const config = {
        type: 'bar',
        data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          responsive:true
        }
      };
      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
    
  })
  d3.csv(chartData2).then(function(datapoints)
  {
    console.log(datapoints);
    const year=[];
    const totalrecovered=[];
    const totalstolen=[];
    for(let i=0;i<datapoints.length;i++)
    {
        year.push(datapoints[i].Year);
        totalrecovered.push(datapoints[i].Auto_Theft_Recovered);
        totalstolen.push(datapoints[i].Auto_Theft_Stolen)
    }
    const data = {
        labels: year,
        datasets: [{
          label: 'Auto Thefts (Stolen)',
          data: totalstolen,
          backgroundColor: [
            'red'
          ],
          borderColor: [
            'black'
          ],
          borderWidth: 1
        },{
            label: 'Auto Thefts (Recovered)',
            data: totalrecovered,
            backgroundColor: [
              'green'
            ],
            borderColor: [
              'black'
            ],
            borderWidth: 1
          }],
        
      };
      const config = {
        type: 'bar',
        data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          responsive:true
        }
      };
      const myChart2 = new Chart(
        document.getElementById('myChart2'),
        config
      );
    
  })
  d3.csv(chartData3).then(function(datapoints)
  {
    console.log(datapoints);
    const year=[];
    const kidnaps=[];
    for(let i=0;i<datapoints.length;i++)
    {
        year.push(datapoints[i].Year);
        kidnaps.push(datapoints[i].Cases_Reported);
    }
    const data = {
        labels: year,
        datasets: [{
          label: 'Kidnaps Reported',
          data: kidnaps,
          backgroundColor: [
            'red'
          ],
          borderColor: [
            'black'
          ],
          borderWidth: 1
        }]
      };
      const config = {
        type: 'bar',
        data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      };
      const myChart3 = new Chart(
        document.getElementById('myChart3'),
        config
      );
    
  })
  