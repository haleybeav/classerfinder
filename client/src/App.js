import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import './App.css';
import Search from './Search';
import Results from './Results';
import Schedule from './Schedule/Schedule';
import {getIndexByCRN} from './CourseHelpers';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      query_results: [],
      selected_courses: [],
      course_to_preview: null,
    }
  }

  cookies = new Cookies();

  componentDidMount(){
    
    let courses = this.cookies.get("courses");
    if(courses){
      this.setState({selected_courses: courses});
    }
  }

  preivewCourse = (course)=>{
    if(course){
      this.setState({course_to_preview: course});      
    }else{
      this.setState({course_to_preview: null});
    }    
  }

  handleChange = (e) => { 
    this.setState({ query: e.target.value })
    this.handleElastic(e.target.value);
  }

  handleElastic = async (value) => {
    if(value){
      let query_result = await axios.get('http://localhost:8080/classes/' + value);      
      this.setState({ query_results: query_result.data })
    } else {
      this.setState({ query_results: [] })
      this.setState({ course_to_preview: null })
    }
  }

  addClass = (course) => {
    if (this.state.selected_courses.indexOf(course) === -1) {
      this.setState({ selected_courses: [...this.state.selected_courses, course] })
      this.cookies.set("courses", [...this.state.selected_courses, course]);
    }    
  }

  removeCourse = (course)=>{
    let index = getIndexByCRN(course.crn, this.state.selected_courses);    
    if(index !== -1) {
      this.state.selected_courses.splice(index, 1);
      this.setState({selected_courses: this.state.selected_courses});
      this.cookies.set("courses", this.state.selected_courses);
    }
  }

  render() {
    return (
      <div className="app">              
        <div className={(this.state.selected_courses.length === 0? "empty-schedule": "") + " working-area"}>
          <div className={(this.state.query.length === 0 ? "center" : "") + " search"}>
          <Search  handleChange={this.handleChange}/>                    
          </div>
          <Results removeCourse={this.removeCourse} currnentCourses={this.state.selected_courses}  preivewCourse={this.preivewCourse} courses={this.state.query_results} addClass={this.addClass}/>
        </div>  
        <Schedule courseToPreview={this.state.course_to_preview} removeCourse={this.removeCourse} courses={this.state.selected_courses}/>

        <div className="love">Made with &hearts; at WWU</div>

      </div>
    );
  }
}

export default App;
