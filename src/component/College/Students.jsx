import React, { useState } from 'react'
import {studentsdata} from './Studendata'
import './std.css'

const Students = () => {
    let [data, setData]=useState(studentsdata)
    let viewDetails=(fnm, lnm, age)=>{alert(`${fnm} ${lnm}'s age is ${age}`)}
    let deleteStd=(indexvalue, fnm)=>{
    //     let x=data.filter(elem=>elem.id!==id) when we dont use duplicate we can use id else use index+1
    // setData(x)
    let bool= window.confirm(`Do you want to delete ${fnm} data?`)
    if (bool){
        setData(data.filter((elem, index)=>index+1!==indexvalue))
        alert(`${fnm} data is deleted`)
    }
    else{
        alert(`not deleted`)
    }
    }
    let deleteAllData=()=>{
        let bool=window.confirm('Do you want to delete all data?')
        bool? setData([]): alert('Data not deleted')
    }
    let addUser=()=>{
        let fname=prompt('Enter the first name: ')
        let lname=prompt('Enter the last name: ')
        let yob=prompt('Enter the year of birth: ')
        let plc=prompt('Enter the place: ')
        if (!fname && !lname && yob==='' && plc===''){
            alert(`fields cant be empty`)
        }
        else{
        let newStd={
            id:0,
            fnm: fname,
            lnm: lname,
            dob: yob,
            place: plc
        }
        setData([...data, newStd])
    }}
    let duplicate=(id, fnm, lnm, dob, place)=>{
        setData([...data, {id, fnm, lnm, dob, place}])
    }
    
  return (
    <>
        <div className="std">
            <div className="header">Student details</div>
            <div className="container">
                <table rules='all' border={2}>
                    <thead>
                        <tr>
                            <th>Slno</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>DOB</th>
                            <th>Place</th>
                            <th>Age</th>
                            <th>View</th>
                            <th>Delete</th>
                            <th>Duplicate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((elem, index)=>{
                            let {id, fnm , lnm, dob, place}=elem
                            let date=new Date()
                            let age=date.getFullYear()-dob
                            return (
                                <>
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{fnm}</td>
                                        <td>{lnm}</td>
                                        <td>{dob}</td>
                                        <td>{place}</td>
                                        <td>{age}</td>
                                        <td><button onClick={()=>viewDetails(fnm, lnm ,age)}>view</button></td>
                                        <td><button onClick={()=>deleteStd(index+1, fnm)}>Delete</button></td>
                                        <td><button onClick={()=>duplicate(id, fnm, lnm, dob, place)}>Dup</button></td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan={4}><button onClick={addUser}>Add user</button></th>
                            <th colspan={4}>
                                {(data.length!==0)?
                                <button onClick={deleteAllData}>Delete all data</button>:
                                <div>Data not found...</div>}
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </>
  )
}

export default Students
