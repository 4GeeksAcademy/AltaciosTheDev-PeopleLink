import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import "../../styles/loginst.css";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




export const Register4 = ({prevPage}) => {

    const { store, actions } = useContext(Context)
    const [category, setCategory] = useState('');
    const [level, setLevel] = useState('');
    const [role, setRole] = useState('Student');

    if (store.categories) {
        categoriesElements = store.categories.map(category => (
          <option key={category.id} value={category.name}>{category.name}</option>
        ))
      }
       // Declare userSkillElements variable
  let userSkillElements = null;

  // Declare categoryElements variable
  let categoriesElements = null

    // useEffect(() => {
    //     actions.getCategories()
    //     actions.getAssociations(level, role, category)
    //   }, [])

    return (



        <div className="text-center">
            <div>
                <h1>Skills</h1>
                <p>Select the skills you have to learn </p>
                <p>First skill: </p>
                <a>Role</a>
                <input
                    className="loginput text-center"
                    type="text"
                    placeholder="Student"
                    value={role}
                    disabled
                />
                
                <a>Level</a>
                <select
                    labelId="level-select-label"
                    id="level-select"
                    value={level}
                    label="Level"
                    onChange={(event) => setLevel(event.target.value)}
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermidiate">Intermidiate</option>
                    <option value="Advanced">Advanced</option>
                </select>

                <a>Category: </a>
                <select
                    className="loginput"
                    labelId="category-select-label"
                    id="category-select"
                    value={category}
                    label="Category"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {/* <option>{categoriesElement}</option> */}
                </select>
            </div>
            <div>
            <p>Second skill: </p>
            <a>Role</a>
                <input
                    className="loginput text-center"
                    type="text"
                    placeholder="Student"
                    value={role}
                    disabled
                />
                
                <a>Level</a>
                <select
                    labelId="level-select-label"
                    id="level-select"
                    value={level}
                    label="Level"
                    onChange={(event) => setLevel(event.target.value)}
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermidiate">Intermidiate</option>
                    <option value="Advanced">Advanced</option>
                </select>

                <a>Category: </a>
                <select
                    className="loginput"
                    labelId="category-select-label"
                    id="category-select"
                    value={category}
                    label="Category"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {/* <option>{categoriesElement}</option> */}
                </select>
            </div>
            <div>
            <p>third skill: </p>
            <a>Role</a>
                <input
                    className="loginput text-center"
                    type="text"
                    placeholder="Student"
                    value={role}
                    disabled
                />
                
                <a>Level</a>
                <select
                    labelId="level-select-label"
                    id="level-select"
                    value={level}
                    label="Level"
                    onChange={(event) => setLevel(event.target.value)}
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermidiate">Intermidiate</option>
                    <option value="Advanced">Advanced</option>
                </select>

                <a>Category: </a>
                <select
                    className="loginput"
                    labelId="category-select-label"
                    id="category-select"
                    value={category}
                    label="Category"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {/* <option>{categoriesElement}</option> */}
                </select>
            </div>
            <div>
            <p>Fourth skill: </p>
            <a>Role</a>
                <input
                    className="loginput text-center"
                    type="text"
                    placeholder="Student"
                    value={role}
                    disabled
                />
                
                <a>Level</a>
                <select
                    labelId="level-select-label"
                    id="level-select"
                    value={level}
                    label="Level"
                    onChange={(event) => setLevel(event.target.value)}
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermidiate">Intermidiate</option>
                    <option value="Advanced">Advanced</option>
                </select>

                <a>Category: </a>
                <select
                    className="loginput"
                    labelId="category-select-label"
                    id="category-select"
                    value={category}
                    label="Category"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {/* <option>{categoriesElement}</option> */}
                </select>
            </div>
            <div>
            <p>fifth skill: </p>
            <a>Role</a>
                <input
                    className="loginput text-center"
                    type="text"
                    placeholder="Student"
                    value={role}
                    disabled
                />
                
                <a>Level</a>
                <select
                    labelId="level-select-label"
                    id="level-select"
                    value={level}
                    label="Level"
                    onChange={(event) => setLevel(event.target.value)}
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermidiate">Intermidiate</option>
                    <option value="Advanced">Advanced</option>
                </select>

                <a>Category: </a>
                <select
                    className="loginput"
                    labelId="category-select-label"
                    id="category-select"
                    value={category}
                    label="Category"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {/* <option>{categoriesElement}</option> */}
                </select>
            </div>
            
            <button type="button" className="nextbutton" onClick={prevPage}>Previous</button>
            
        </div>

    );
};