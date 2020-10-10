import React from 'react'

const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Total = ({ course }) => {
    let sum = 0
    let i
    for (i = 0; i < course.parts.length; i++) {
        sum += course.parts[i].exercises
    }
    return (
        <p>Total of {sum} exercises</p>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map((part, i) => 
                <Part key={part.id} part={course.parts[i]} />
            )}
        </div>
    )
}

const Course = ({ course }) => {

    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

export default Course