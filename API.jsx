import React, { useEffect, useState } from "react";

const GetData = () => {
    // USE CAMEL CASE
    let [weight,setWeight]=useState(9);
    let [status,setStatus]=useState(true);
    let [thresholdWeight,setThresholdWeight]=useState(0);
    let [updateWeight,setUpdateWeight]=useState(0);

    let API = "https://blr1.blynk.cloud/external/api/isHardwareConnected?token=KYY7zrOb7PaI99joDJ3v2qqt8BeKOCj_";
    let weightURL = "https://blr1.blynk.cloud/external/api/get?token=KYY7zrOb7PaI99joDJ3v2qqt8BeKOCj_&V2";
    let thresholdWeightURL="https://blr1.blynk.cloud/external/api/get?token=KYY7zrOb7PaI99joDJ3v2qqt8BeKOCj_&V4";
    
    const fetchData = async (url) => {
        try {
            const res = await fetch(url);
            console.log(status);
            status = await res.json();
            setStatus(status);
            console.log(status);
        } catch (error) {
            console.log("error, unable to fetch");
        }
    }

    const fetchWeight = async (url) => {
        try {
            const res = await fetch(url);
            weight = await res.json();
            setWeight(weight);
            console.log(weight);
        } catch (error) {
            console.log("error, unable to fetch");
        }
    }
    const fetchThreshold = async (url) => {
        try {
            const res = await fetch(url);
            thresholdWeight = await res.json();
            setThresholdWeight(thresholdWeight);
            console.log(thresholdWeight);
            setThresholdWeight()
        } catch (error) {
            console.log("error, unable to fetch");
        }
    }

    const updateThresholdValue=(v)=>{
        console.log("called");
        let url=`https://blr1.blynk.cloud/external/api/update?token=KYY7zrOb7PaI99joDJ3v2qqt8BeKOCj_&V4=${v}`;
    }
    useEffect(() => {
        fetchData(API);
        fetchWeight(weightURL);
        fetchThreshold(thresholdWeightURL);
    }, [])

    return (
        <div>
        <h1>{status.toString()} DEVICE STATUS
        {JSON.stringify(status)==="true"? <div>ON</div>: <div>OFF</div>}</h1>
        <h1>{JSON.stringify(weight)}: weight</h1>
        <h1>thresholdWeight: {thresholdWeight}</h1>
        <form action="">
        <input type="number" onChange={(e)=>updateThresholdValue(e.target.value)}/>
        </form>
        </div>
    );
};

export default GetData;

// make component to re-render every 2 sec

