import { React , Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      title : "Final Crud Project",
      studentData : [],
      act : 0,
      index : ''
    }
  }

  handleSubmit= (e) => {
    e.preventDefault();
    let studentData = this.state.studentData;
    let name = this.refs.txtName.value;
    let age = this.refs.txtAge.value;
    let schoolname = this.refs.txtSchoolName.value;
    let gradeandyear = this.refs.txtGradeandYear.value;

    if(this.state.act == 0)
    {
      let newStudent = {
        "name" : name,
        "age" : age,
        "schoolname" : schoolname,
        "gradeandyear" : gradeandyear
      }
      studentData.push(newStudent);
    }
    
    else
    {
      let index = this.state.index;
      studentData[index].name = name;
      studentData[index].age = age;
      studentData[index].schoolname = schoolname;
      studentData[index].gradeandyear = gradeandyear;
    }


    this.setState({
      studentData : studentData,
      act: 0
    })

    this.refs.myForm.reset();

  }

  handleEdit = (i) =>{
      let studentData = this.state.studentData[i];
      this.refs.txtName.value = studentData.name;
      this.refs.txtAge.value = studentData.age;
      this.refs.txtSchoolName.value = studentData.schoolname;
      this.refs.txtGradeandYear.value = studentData.gradeandyear;

      this.setstate({
        studentData : studentData,
        act : 1,
        index : i
      })
  }


  handleDelete= (i) =>{
    let studentData = this.state.studentData;
    studentData.splice(i,1);
    this.setState({
      studentData : studentData
    });
  }

  render(){
    let studentData = this.state.studentData;
    return(
      <div>
        <form ref="myForm" className="myForm">
        <h1>{this.state.title}</h1>
        <label>Name</label>
        <input type="text" ref="txtName" placeholder="Enter Student Name" className="formfield"/>
        <label>Age</label>
        <input type="text" ref="txtAge" placeholder="Enter Student Age" className="formfield"/>
        <label>School Name</label>
        <input type="text" ref="txtSchoolName" placeholder="Enter School Name" className="formfield"/>
        <label>Grade and Year</label>
        <input type="text" ref="txtGradeandYear" placeholder="Enter Grade and Year" className="formfield"/>
        <button onClick={e => this.handleSubmit(e)} className="myButton">Save</button>
        </form>
        <table className="table">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>School Name</th>
            <th>Grade and Year</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {
            studentData.map( (data, i) =>
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.schoolname}</td>
              <td>{data.gradeandyear}</td>
              <td>
                <button onClick={i =>this.handleEdit(i)}  className="myButton">Edit</button>
              </td>
              <td>
                <button onClick={i =>this.handleDelete(i)}  className="myButton">Delete</button>
              </td>
            </tr> )
          }
        </table>
        </div>
    )
  }

}
export default App;