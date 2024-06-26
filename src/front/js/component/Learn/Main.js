import React, { useEffect, useContext, useState } from 'react'
import { TutorCard } from "../Dashboard/TutorCard";
import { SkillCard } from "../Dashboard/SkillCard";

import { Context } from "../../store/appContext";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Main() {
  const { store, actions } = useContext(Context)
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    actions.getCategories()
    actions.getAssociations(level, role, category)
  }, [])

  // Declare userSkillElements variable
  let userSkillElements = null;

  // Declare categoryElements variable
  let categoriesElements = null

  // Check if store.userSkillsAssociations is available
  if (store.userSkillsAssociations) {
    userSkillElements = store.userSkillsAssociations.map((association) => (
      <SkillCard
        key={association.user_skill_association_id}
        user_name={association.user_name}
        skill_name={association.skill_name}
        role={association.role}
        level={association.level}
        user_gender={association.user_gender}
        category_name={association.category_name}
        category_image={association.category_image}
        getTutorProfile={() => actions.getTutorProfile(association.user_id)}
        addFavorite={() => actions.addFavorite(association.user_id)}
        id={association.user_id}

      />
    ));
  }

  //Check if store.categories is available 
  if (store.categories) {
    categoriesElements = store.categories.map(category => (
      <MenuItem key={category.id} value={category.name}>{category.name}</MenuItem>
    ))
  }

  console.log({
    "level": level,
    "role": role,
    "category":category
  })

  return (
    <div className="learn-container">
      <h4 className="learn-title">What are you looking for?</h4>
      <div className="learn-input-container container">
        {/* <input className="learn-search" placeholder='Search Student' />
        <input className="learn-search" placeholder='Search Tutor' />
        <input className="learn-search" placeholder='Search Skill' />
        <input className="learn-search" placeholder='Search Date' />
        <input className="learn-search" placeholder='Search Time' />
        <input className="learn-search" placeholder='Search Status' /> */}

        <Box sx={{ minWidth: 120, mr: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="level-select-label">Level</InputLabel>
            <Select
              labelId="level-select-label"
              id="level-select"
              value={level}
              label="Level"
              onChange={(event) => setLevel(event.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Beginner">Beginner</MenuItem>
              <MenuItem value="Intermediate">Intermediate</MenuItem>
              <MenuItem value="Advanced">Advanced</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120, mr: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="role-select-label">Role</InputLabel>
            <Select
              labelId="role-select-label"
              id="role-select"
              value={role}
              label="Role"
              onChange={(event) => setRole(event.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Learner">Learner</MenuItem>
              <MenuItem value="Tutor">Tutor</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120, mr: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="category-select-label">Category</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              value={category}
              label="Category"
              onChange={(event) => setCategory(event.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {categoriesElements}
            </Select>
          </FormControl>
        </Box>
        <button type="submit" className="send-session-details" onClick={() => actions.getAssociations(level, role,category)}>Search</button>

      </div>
      {store.userSkillsAssociations ?
      <div className="learn-tutor-cards-container container">
        {userSkillElements}
      </div>:
          
          <div className="learn-tutor-cards-container container" style={{marginTop: "50px"}}>
          <span class="loader"></span>
          <span class="loader"></span>
          <span class="loader"></span>
          </div>
      }
    </div>
  )
}

export default Main
