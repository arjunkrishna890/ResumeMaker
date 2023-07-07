import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    personal: {
      name: "",
      age: "",
      gender: "",
      mobile: "",
      address: "",
      languages: [],
      skills: [],
      educationalDetails: [],
      workExperience:[],
      summery:"",
      file: null,

    },
  },
  reducers: {
    setData: (state, action) => {
      state.personal.name = action.payload;
    },
    setAge: (state, action) => {
      state.personal.age = action.payload;
    },
    setGender: (state, action) => {
      state.personal.gender = action.payload;
    },
    setMobile: (state, action) => {
      state.personal.mobile = action.payload;
    },
    setAddress: (state, action) => {
      state.personal.address = action.payload;
    },
    addLanguage: (state, action) => {
        if (state.personal.languages.length < 4) {
          state.personal.languages.push(action.payload);
        }
      },
      
    removeLanguage: (state, action) => {
      state.personal.languages = state.personal.languages.filter(
        (language) => language !== action.payload
      );
    },
    addSkill: (state, action) => {
        state.personal.skills.push(action.payload);
      },
      removeSkill: (state, action) => {
        state.personal.skills= state.personal.skills.filter(
          (skill) => skill !== action.payload
        );
      },
      addEducationalDetail: (state, action) => {
        state.personal.educationalDetails.push(action.payload);
      },
      removeEducationalDetail: (state, action) => {
        state.personal.educationalDetails = state.personal.educationalDetails.filter(
          (detail) => detail.id !== action.payload
        );
      },
      addWorkexperienceDetail: (state, action) => {
        state.personal.workExperience.push(action.payload);
      },
      removeWorkexperienceDetail: (state, action) => {
        state.personal.workExperience = state.personal.workExperience.filter(
          (detail) => detail.id !== action.payload
        );
      },
      setImageFile: (state, action) => {
        state.file = action.payload;
      },
      setSummery: (state, action) => {
        state.personal.summery = action.payload;
      },
  },
});

export const {
  setData,
  setAge,
  setGender,
  setMobile,
  setAddress,
  addLanguage,
  removeLanguage,
  addSkill,
  removeSkill,
  addEducationalDetail,
  removeEducationalDetail,
  addWorkexperienceDetail,
  removeWorkexperienceDetail, setImageFile,setSummery
} = dataSlice.actions;
export default dataSlice.reducer;
