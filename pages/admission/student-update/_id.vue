<template>
    <div>
      <div class="card mx-auto mt-5">
        <div class="card-header">
          <div class="row">
            <div class="col">Admission In Active Batch Create</div>
          </div>
        </div>
        <div class="card-body">
          <div id="vue_app">
            <div id="progrss-wizard" class="twitter-bs-wizard">
              <ul class="twitter-bs-wizard-nav nav-justified">
                <li class="nav-item d-none">
                  <a class="nav-link"> </a>
                </li>
  
                <li class="nav-item" v-if="generalStep">
                  <a class="nav-link" :class="generalStep ? 'active' : ''">
                    <span class="step-number mr-2">01.</span> General
                  </a>
                </li>
  
                <li class="nav-item" v-if="personalStep">
                  <a class="nav-link">
                    <span class="step-number mr-2">02.</span> Personal
                  </a>
                </li>
  
                <li class="nav-item" v-if="familyStep">
                  <a class="nav-link" :class="familyStep ? 'active' : ''">
                    <span class="step-number mr-2">03.</span> Family
                  </a>
                </li>
  
                <li class="nav-item" v-if="educationStep">
                  <a class="nav-link" :class="educationStep ? 'active' : ''">
                    <span class="step-number mr-2">04.</span> Education
                  </a>
                </li>
               
              </ul>
  
              <div class="mt-3">
                <div class="tab-content twitter-bs-wizard-tab-content">
                  <!-- {{ --general--}} -->
                  <div class="tab-pane" :class="generalStep ? 'active' : ''">
                    <div class="form-group row">
                      <label class="col-md-3 col-form-label"
                        >Department <span class="text-danger">*</span></label
                      >
                      <div class="col-md-9 mt-10">
                        <select
                          name="department_id"
                          v-model="student.department_id"
                          id="department_id"
                          class="form-control"
                          required
                          @change="fetchBatch"
                        >
                          <option value="" disabled selected>
                            Select Department
                          </option>
                          <option
                            disable
                            v-for="(department, index) in departments"
                            :key="index"
                            :value="department.id"
                            v-text="department.department_name"
                          ></option>
                        </select>
  
                        <small
                          v-if="errors.department_id"
                          class="text-danger with-errors"
                          v-html="errors.department_id[0]"
                        ></small>
                      </div>
                    </div>
  
                    <div class="form-group row">
                      <label class="col-md-3 col-form-label"
                        >Batch <span class="text-danger">*</span></label
                      >
                      <div class="col-md-9 mt-10">
                        <input
                          type="text"
                          disabled
                          class="form-control"
                          placeholder="Select Department first"
                          v-if="!batches"
                        />
                        <select
                          class="form-control"
                          v-model="student.batch_id"
                          required
                          v-else
                          @change="fetchShiftGroup"
                        >
                          <option selected value="">Select Batch</option>
                          <option
                            v-for="batch in batches"
                            :key="batch.id"
                            :value="batch.id"
                            v-text="batch.batch_name"
                          ></option>
                        </select>
  
                        <small
                          v-if="errors.batch_id"
                          class="text-danger with-errors"
                          v-html="errors.batch_id[0]"
                        ></small>
                      </div>
                    </div>
  
                    <div class="form-group row">
                      <label class="col-md-3 col-form-label"
                        >Shift <span class="text-danger">*</span></label
                      >
                      <div class="col-md-9 mt-10">
                        <input
                          type="text"
                          disabled
                          class="form-control"
                          placeholder="Select Batch First"
                          v-if="!shifts"
                        />
                        <select
                          name="shift_id"
                          v-model="student.shift_id"
                          id="shift_id"
                          class="form-control"
                          required
                          v-else
                        >
                          <option value="" disabled selected>Select Shift</option>
                          <option
                            v-for="(shift, index) in shifts"
                            :key="index"
                            :value="shift.id"
                            v-html="shift.shift"
                          ></option>
                        </select>
  
                        <small
                          v-if="errors.shift_id"
                          class="text-danger with-errors"
                          v-html="errors.shift_id[0]"
                        ></small>
                      </div>
                    </div>
  
                    <div class="form-group row">
                      <label class="col-md-3 col-form-label"
                        >Group <span class="text-danger">*</span></label
                      >
                      <div class="col-md-9 mt-10">
                        <input
                          type="text"
                          disabled
                          class="form-control"
                          placeholder="Select Batch First"
                          v-if="!shifts"
                        />
                        <select
                          name="group_id"
                          v-model="student.group_id"
                          id="group_id"
                          class="form-control"
                          required
                          v-else
                        >
                          <option value="" disabled selected>Select Group</option>
                          <option
                            v-for="(group, index) in groups"
                            :key="index"
                            :value="group.id"
                            v-html="group.group"
                          ></option>
                        </select>
  
                        <small
                          v-if="errors.group_id"
                          class="text-danger with-errors"
                          v-html="errors.group_id[0]"
                        ></small>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-md-3 col-form-label"
                        >Roll No<span class="text-danger">*</span></label
                      >
                      <div class="col-md-9 mt-10">
                        <input
                          type="number"
                          class="form-control"
                          placeholder="Enter Roll Number"
                          v-model="student.roll_no"
                        />
  
                        <small
                          v-if="errors.roll_no"
                          class="text-danger with-errors"
                          v-html="errors.roll_no[0]"
                        ></small>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-md-3 col-form-label"
                        >REG No<span class="text-danger">*</span></label
                      >
                      <div class="col-md-9 mt-10">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Reg Number"
                          v-model="student.reg_no"
                        />
  
                        <small
                          v-if="errors.reg_no"
                          class="text-danger with-errors"
                          v-html="errors.reg_no[0]"
                        ></small>
                      </div>
                    </div>
  
                    <div class="form-group row">
                      <label class="col-md-3 col-form-label"
                        >Admission Form Sl
                        <span class="text-danger">*</span></label
                      >
                      <div class="col-md-9 mt-10">
                        <input type="number"
                          class="form-control"
                          name="adm_frm_sl"
                          v-model="student.adm_frm_sl"
                          placeholder="Enter Admission Form Sl No"
                          required
                        />
  
                        <small
                          v-if="errors.adm_frm_sl"
                          class="text-danger with-errors"
                          v-html="errors.adm_frm_sl[0]"
                        ></small>
                      </div>
                    </div>
  
                    <ul
                      class="pager wizard twitter-bs-wizard-pager-link text-right"
                    >
                      <button
                        type="button"
                        @click="nextStep('general')"
                        class="btn btn-success"
                      >
                        Next
                      </button>
                    </ul>
                  </div>
  
                  <!-- {{ --personal--}} -->
                  <div class="tab-pane" :class="personalStep ? 'active' : ''">
                    <div class="row">
                      <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                          <label for="student_name"
                            >Student Name(বাংলা)
                            <span class="text-danger">*</span></label
                          >
                          <input
                            id="student_name"
                            type="text"
                            class="form-control"
                            v-model="student.student_name_bangla"
                            placeholder="Enter student name in bangla"
                            required
                          />
  
                          <small
                            v-if="errors.student_name_bangla"
                            class="text-danger with-errors"
                            v-html="errors.student_name_bangla[0]"
                          ></small>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                          <label for="student_name"
                            >Student Name(English)
                            <span class="text-danger">*</span></label
                          >
                          <input
                            id="student_name"
                            type="text"
                            class="form-control"
                            v-model="student.student_name_english"
                            placeholder="Enter student name in english"
                            required
                          />
  
                          <small
                            v-if="errors.student_name_english"
                            class="text-danger with-errors"
                            v-html="errors.student_name_english[0]"
                          ></small>
                        </div>
                      </div>
  
                      <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                          <label for="blood_group"
                            >Blood Group <span class="text-danger">*</span></label
                          >
  
                          <select
                            name="blood_group"
                            v-model="student.blood_group"
                            id="blood_group"
                            class="form-control"
                            required
                          >
                            <option
                              v-for="(blood, index) in bloods"
                              :key="index"
                              :value="blood.value"
                              v-text="blood.text"
                            ></option>
                          </select>
  
                          <small
                            v-if="errors.blood_group"
                            class="text-danger with-errors"
                            v-html="errors.blood_group[0]"
                          ></small>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                          <label for="gender"
                            >Gender <span class="text-danger">*</span></label
                          >
  
                          <select
                            name="gender"
                            id="gender"
                            v-model="student.gender"
                            class="form-control"
                          >
                            <option value="" selected disabled hidden>
                              Select one
                            </option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="O">Other</option>
                          </select>
  
                          <small
                            v-if="errors.gender"
                            class="text-danger with-errors"
                            v-html="errors.gender[0]"
                          ></small>
                        </div>
                      </div>
  
                      <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                          <label for="dob"
                            >Date of Birth
                            <span class="text-danger">*</span></label
                          >
  
                          <input
                            type="date"
                            name="dob"
                            class="form-control"
                            v-model="student.dob"
                          />
  
                          <small
                            v-if="errors.dob"
                            class="text-danger with-errors"
                            v-html="errors.dob[0]"
                          ></small>
                        </div>
                      </div>
  
                      <!-- <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                          <label for="birth_place"
                            >Birth Place <span class="text-danger">*</span></label
                          >
                          <input
                            type="text"
                            class="form-control"
                            v-model="student.birth_place"
                            placeholder="Enter birth place"
                          />
                          <small
                            v-if="errors.birth_place"
                            class="text-danger with-errors"
                            v-html="errors.birth_place[0]"
                          ></small>
                        </div>
                      </div> -->
  
                      <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                          <label for="std_birth_no"
                            >Birth Certificate Number
                            <span class="text-danger">*</span></label
                          >
                          <input
                            type="number"
                            class="form-control"
                            v-model="student.std_birth_no"
                            placeholder="Enter std birth or nid no"
                          />
                          <small
                            v-if="errors.std_birth_no"
                            class="text-danger with-errors"
                            v-html="errors.std_birth_no[0]"
                          ></small>
                        </div>
                      </div> 
                                        
  
                      <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="card my-2">
                          <div class="card-header">Permanent Address</div>
                          <div class="card-body">
                            <div class="row">
                              <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                  <label for="permanent_add"
                                    >Permanent Address
                                    <span class="text-danger">*</span></label
                                  >
                                  <textarea
                                    name="permanent_add"
                                    v-model="student.permanent_add"
                                    class="form-control"
                                    id="permanent_add"
                                    cols="30"
                                    rows="3"
                                    placeholder="Enter permanent add"
                                    required
                                  ></textarea>
                                  <small
                                    v-if="errors.permanent_add"
                                    class="text-danger with-errors"
                                    v-html="errors.permanent_add[0]"
                                  ></small>
                                </div>
                              </div>
  
                              <div class="col-lg-3 col-md-6 col-sm-12">
                                <div class="form-group">
                                  <label for="division">Division</label>
                                  <select
                                    @change="fetchPermanentDistricts"
                                    name="division"
                                    id="division"
                                    class="form-control"
                                    v-model="permanent_division"
                                  >
                                    <option selected disabled value="">
                                      Select Devision
                                    </option>
                                    <option
                                      v-for="(division, index) in divisions"
                                      :key="index"
                                      :value="division"
                                      v-text="division.name"
                                    ></option>
                                  </select>
                                </div>
                              </div>
  
                              <div class="col-lg-3 col-md-6 col-sm-12">
                                <div class="form-group">
                                  <label for="district">District</label>
                                  <select
                                    @change="fetchPermanentThana"
                                    name="district"
                                    id="district"
                                    class="form-control"
                                    v-model="permanent_district"
                                  >
                                    <option selected disabled value="">
                                      Select District
                                    </option>
                                    <option
                                      v-for="(district, index) in districts"
                                      :key="index"
                                      :value="district"
                                      v-text="district.name"
                                    ></option>
                                  </select>
                                </div>
                              </div>
  
                              <div class="col-lg-3 col-md-6 col-sm-12">
                                <div class="form-group">
                                  <label for="thana">Thana / Upazila</label>
                                  <select
                                    @change="fetchPermanentUnion"
                                    name="thana"
                                    id="thana"
                                    class="form-control"
                                    v-model="permanent_thana"
                                  >
                                    <option selected disabled value="">
                                      Select Thana
                                    </option>
                                    <option
                                      v-for="(upazila, index) in upazilas"
                                      :key="index"
                                      :value="upazila"
                                      v-text="upazila.name"
                                    ></option>
                                  </select>
                                </div>
                              </div>
  
                              <div class="col-lg-3 col-md-6 col-sm-12">
                                <div class="form-group">
                                  <label for="union">Union</label>
                                  <select
                                    @change="fetchPermanentAddress"
                                    name="union"
                                    id="union"
                                    class="form-control"
                                    v-model="permanent_union"
                                  >
                                    <option selected disabled value="">
                                      Select Union
                                    </option>
                                    <option
                                      v-for="(union, index) in unions"
                                      :key="index"
                                      :value="union"
                                      v-text="union.name"
                                    ></option>
                                  </select>
                                </div>
                              </div>
  
                              <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                  <label for="permanent_add"
                                    >Road / House / Village</label
                                  >
                                  <input
                                    @keyup="permanentAdd"
                                    placeholder="Road / House / Village"
                                    type="text"
                                    class="form-control"
                                    v-model="permanent_sub_address"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
  
                        <div class="card my-2">
                          <div class="card-header">
                            Mailing Address
  
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                @click="sameAsPermanent()"
                                type="checkbox"
                                v-model="same_as_permanent"
                                value="yes"
                                id="sameAsPermanent"
                              />
                              <label
                                class="form-check-label"
                                for="sameAsPermanent"
                              >
                                Same as permanent
                              </label>
                            </div>
                          </div>
  
                          <div class="card-body">
                            <div class="row">
                              <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                  <label for="mailing_add"
                                    >Mailing Address
                                    <span class="text-danger">*</span></label
                                  >
                                  <textarea
                                    name="mailing_add"
                                    v-model="student.mailing_add"
                                    class="form-control"
                                    id="mailing_add"
                                    cols="30"
                                    rows="3"
                                    placeholder="Enter mailing add"
                                  ></textarea>
                                  <small
                                    v-if="errors.mailing_add"
                                    class="text-danger with-errors"
                                    v-html="errors.mailing_add[0]"
                                  ></small>
                                </div>
                              </div>
  
                              <div class="col-lg-3 col-md-6 col-sm-12">
                                <div class="form-group">
                                  <label for="division">Division</label>
                                  <select
                                    @change="fetchMailingtDistricts"
                                    name="division"
                                    id="division"
                                    class="form-control"
                                    v-model="mailing_division"
                                  >
                                    <option
                                      v-for="(
                                        division, index
                                      ) in mailingDivisions"
                                      :key="index"
                                      :value="division"
                                      v-text="division.name"
                                    ></option>
                                    <option selected disabled value="0">
                                      Select Division
                                    </option>
                                  </select>
                                </div>
                              </div>
  
                              <div class="col-lg-3 col-md-6 col-sm-12">
                                <div class="form-group">
                                  <label for="district">District</label>
                                  <select
                                    @change="fetchMailingThana"
                                    name="district"
                                    id="district"
                                    class="form-control"
                                    v-model="mailing_district"
                                  >
                                    <option
                                      v-for="(
                                        district, index
                                      ) in mailingDistricts"
                                      :key="index"
                                      :value="district"
                                      v-text="district.name"
                                    ></option>
                                    <option selected disabled value="0">
                                      Select District
                                    </option>
                                  </select>
                                </div>
                              </div>
  
                              <div class="col-lg-3 col-md-6 col-sm-12">
                                <div class="form-group">
                                  <label for="thana">Thana / Upazila</label>
                                  <select
                                    @change="fetchMailingtUnion"
                                    name="thana"
                                    id="thana"
                                    class="form-control"
                                    v-model="mailing_thana"
                                  >
                                    <option
                                      v-for="(upazila, index) in mailingUpazilas"
                                      :key="index"
                                      :value="upazila"
                                      v-text="upazila.name"
                                    ></option>
                                    <option selected disabled value="0">
                                      Select Thana
                                    </option>
                                  </select>
                                </div>
                              </div>
  
                              <div class="col-lg-3 col-md-6 col-sm-12">
                                <div class="form-group">
                                  <label for="union">Union</label>
                                  <select
                                    @change="fetchMailingAddress"
                                    name="union"
                                    id="union"
                                    class="form-control"
                                    v-model="mailing_union"
                                  >
                                    <option
                                      v-for="(union, index) in mailingUnions"
                                      :key="index"
                                      :value="union"
                                      v-text="union.name"
                                    ></option>
                                    <option selected disabled value="0">
                                      Select Union
                                    </option>
                                  </select>
                                </div>
                              </div>
  
                              <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                  <label for="permanent_add"
                                    >Road / House / Village</label
                                  >
                                  <input
                                    @keyup="mailingAdd"
                                    placeholder="Road / House / Village"
                                    type="text"
                                    class="form-control"
                                    v-model="mailing_sub_address"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul
                      class="pager wizard twitter-bs-wizard-pager-link text-right"
                    >
                      <button
                        type="button"
                        @click="previewStep(1)"
                        class="btn btn-info"
                      >
                        Previous
                      </button>
  
                      <button
                        type="button"
                        @click="nextStep('personal')"
                        class="btn btn-success"
                      >
                        Next
                      </button>
                    </ul>
                  </div>
  
                  <!-- {{ --family--}} -->
                  <div class="tab-pane" :class="familyStep ? 'active' : ''">
                    <div>
                      <div class="card mb-2">
                        <div class="card-header">Father Info</div>
                        <div class="card-body">
                          <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-12">
                              <div class="form-group">
                                <label for="f_name"
                                  >Name <span class="text-danger">*</span></label
                                >
                                <input
                                  id="f_name"
                                  type="text"
                                  class="form-control"
                                  v-model="student.f_name"
                                  placeholder="Enter father name"
                                  required
                                />
  
                                <small
                                  v-if="errors.f_name"
                                  class="text-danger with-errors"
                                  v-html="errors.f_name[0]"
                                ></small>
                              </div>
                            </div>
  
                            <div class="col-lg-4 col-md-6 col-sm-12">
                              <div class="form-group">
                                <label for="f_cellno">
                                  Mobile Number-1
                                  <span class="text-danger">*</span></label
                                >
                                <input
                                  id="f_cellno1"
                                  type="number"
                                  class="form-control"
                                  v-model="student.f_cellno1"
                                  placeholder="Enter cell no"
                                  required
                                />
  
                                <small
                                  v-if="errors.f_cellno1"
                                  class="text-danger with-errors"
                                  v-text="errors.f_cellno1[0]"
                                ></small>
                              </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12">
                              <div class="form-group">
                                <label for="f_cellno"> Mobile Number-2</label>
                                <input
                                  id="f_cellno1"
                                  type="number"
                                  class="form-control"
                                  v-model="student.f_cellno2"
                                  placeholder="Enter cell no"
                                  required
                                />
  
                                <small
                                  v-if="errors.f_cellno2"
                                  class="text-danger with-errors"
                                  v-text="errors.f_cellno2[0]"
                                ></small>
                              </div>
                            </div>
  
                            <div class="col-lg-4 col-md-6 col-sm-12">
                              <div class="form-group">
                                <label for="f_occu">Occupation</label>
                                <input
                                  id="f_occu"
                                  type="text"
                                  class="form-control"
                                  v-model="student.f_occu"
                                  placeholder="Enter occupation"
                                />
  
                                <small
                                  v-if="errors.f_occu"
                                  class="text-danger with-errors"
                                  v-html="errors.f_occu[0]"
                                ></small>
                              </div>
                            </div>
  
                            <div class="col-lg-4 col-md-6 col-sm-12">
                              <div class="form-group">
                                <label for="father_nid_no"
                                  >NID No
                                  <span class="text-danger">*</span></label
                                >
                                <input
                                  id="father_nid_no"
                                  type="number"
                                  class="form-control"
                                  v-model="student.f_nid_no"
                                  placeholder="Enter nid"
                                />
  
                                <small
                                  v-if="errors.f_nid_no"
                                  class="text-danger with-errors"
                                  v-html="errors.f_nid_no[0]"
                                ></small>
                              </div>
                            </div>                           
                          </div>
                        </div>
                      </div>  
                      <div class="card mb-2">
                        <div class="card-header">Mother Info</div>
                        <div class="card-body">
                          <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-12">
                              <div class="form-group">
                                <label for="m_name"
                                  >Name <span class="text-danger">*</span></label
                                >
                                <input
                                  id="m_name"
                                  type="text"
                                  class="form-control"
                                  v-model="student.m_name"
                                  placeholder="Enter mother name"
                                  required
                                />
  
                                <small
                                  v-if="errors.m_name"
                                  class="text-danger with-errors"
                                  v-html="errors.m_name[0]"
                                ></small>
                              </div>
                            </div>
  
                            <div class="col-lg-4 col-md-6 col-sm-12">
                              <div class="form-group">
                                <label for="m_cellno"
                                  >Mobile Number-1
                                  <span class="text-danger">*</span></label
                                >
                                <input
                                  id="m_cellno"
                                  type="number"
                                  class="form-control"
                                  v-model="student.m_cellno1"
                                  placeholder="Enter cell no"
                                  required
                                />
  
                                <small
                                  v-if="errors.m_cellno1"
                                  class="text-danger with-errors"
                                  v-html="errors.m_cellno1[0]"
                                ></small>
                              </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12">
                              <div class="form-group">
                                <label for="m_cellno">Mobile Number-2 </label>
                                <input
                                  id="m_cellno"
                                  type="number"
                                  class="form-control"
                                  v-model="student.m_cellno2"
                                  placeholder="Enter cell no"
                                  required
                                />
  
                                <small
                                  v-if="errors.m_cellno2"
                                  class="text-danger with-errors"
                                  v-html="errors.m_cellno2[0]"
                                ></small>
                              </div>
                            </div>
  
                            <div class="col-lg-4 col-md-6 col-sm-12">
                              <div class="form-group">
                                <label for="m_occu">Occupation</label>
                                <input
                                  id="m_occu"
                                  type="text"
                                  class="form-control"
                                  v-model="student.m_occu"
                                  placeholder="Enter occupation"
                                />
  
                                <small
                                  v-if="errors.m_occu"
                                  class="text-danger with-errors"
                                  v-html="errors.m_occu[0]"
                                ></small>
                              </div>
                            </div>
  
                            <div class="col-lg-4 col-md-6 col-sm-12">
                              <div class="form-group">
                                <label for="mother_nid_no"
                                  >NID No
                                  <span class="text-danger">*</span></label
                                >
                                <input
                                  id="mother_nid_no"
                                  type="number"
                                  class="form-control"
                                  v-model="student.m_nid_no"
                                  placeholder="Enter nid"
                                />
  
                                <small
                                  v-if="errors.m_nid_no"
                                  class="text-danger with-errors"
                                  v-html="errors.m_nid_no[0]"
                                ></small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
  
                      <div class="card mb-2">
                        <div class="card-header">Guardian info</div>
                        <div class="card-body">
                          <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-12">
                              <div class="form-group">
                                <label for="g_name"
                                  >Name<span class="text-danger">*</span></label
                                >
                                <input
                                  id="g_name"
                                  type="text"
                                  class="form-control"
                                  v-model="student.g_name"
                                  placeholder="Enter g name"
                                />
  
                                <small
                                  v-if="errors.g_name"
                                  class="text-danger with-errors"
                                  v-html="errors.g_name[0]"
                                ></small>
                              </div>
                            </div>
  
                            <div class="col-lg-4 col-md-6 col-sm-12">
                              <div class="form-group">
                                <label for="g_cellno"
                                  >Mobile Number-1<span class="text-danger"
                                    >*</span
                                  ></label
                                >
                                <input
                                  id="g_cellno"
                                  type="text"
                                  class="form-control"
                                  v-model="student.g_cellno1"
                                  placeholder="Enter cell no"
                                  required
                                />
  
                                <small
                                  v-if="errors.g_cellno1"
                                  class="text-danger with-errors"
                                  v-html="errors.g_cellno1[0]"
                                ></small>
                              </div>
                            </div>
  
                            <div class="col-lg-4 col-md-6 col-sm-12">
                              <div class="form-group">
                                <label for="g_cellno">Mobile Number-2</label>
                                <input
                                  id="g_cellno"
                                  type="text"
                                  class="form-control"
                                  v-model="student.g_cellno2"
                                  placeholder="Enter cell no"
                                  required
                                />
  
                                <small
                                  v-if="errors.g_cellno2"
                                  class="text-danger with-errors"
                                  v-html="errors.g_cellno2[0]"
                                ></small>
                              </div>
                            </div>
  
                            <div class="col-lg-4 col-md-6 col-sm-12">
                              <div class="form-group">
                                <label for="g_occu">Occupation</label>
                                <input
                                  id="g_occu"
                                  type="text"
                                  class="form-control"
                                  v-model="student.g_occu"
                                  placeholder="Enter occupation"
                                />
  
                                <small
                                  v-if="errors.g_occu"
                                  class="text-danger with-errors"
                                  v-html="errors.g_occu[0]"
                                ></small>
                              </div>
                            </div>
  
                            <div class="col-lg-4 col-md-6 col-sm-12">
                              <div class="form-group">
                                <label for="e_relation"
                                  >NID No<span class="text-danger">*</span></label
                                >
                                <input
                                  id="g_nid_no"
                                  type="number"
                                  class="form-control"
                                  v-model="student.g_nid_no"
                                  placeholder="Enter e relation"
                                />
  
                                <small
                                  v-if="errors.g_nid_no"
                                  class="text-danger with-errors"
                                  v-html="errors.g_nid_no[0]"
                                ></small>
                              </div>
                            </div>                                                   
                          <div class="card-body">
                            <div class="row">
                              <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                  <label for="permanent_add"
                                    >Guardian Address
                                    <span class="text-danger">*</span></label
                                  >
                                  <textarea
                                    name="permanent_add"
                                    v-model="student.guardian_add"
                                    class="form-control"
                                    id="permanent_add"
                                    cols="30"
                                    rows="3"
                                    placeholder="Enter permanent add"
                                    required
                                  ></textarea>
                                  <small
                                    v-if="errors.guardian_add"
                                    class="text-danger with-errors"
                                    v-html="errors.guardian_add[0]"
                                  ></small>
                                </div>
                              </div>
  
                              <div class="col-lg-3 col-md-6 col-sm-12">
                                <div class="form-group">
                                  <label for="division">Division</label>
                                  <select
                                    @change="fetchGuardiantDistricts"
                                    name="division"
                                    id="division"
                                    class="form-control"
                                    v-model="guardian_division"
                                  >
                                    <option selected disabled value="">
                                      Select Devision
                                    </option>
                                    <option
                                      v-for="(division, index) in guardianDivisions"
                                      :key="index"
                                      :value="division"
                                      v-text="division.name"
                                    ></option>
                                  </select>
                                </div>
                              </div>
  
                              <div class="col-lg-3 col-md-6 col-sm-12">
                                <div class="form-group">
                                  <label for="district">District</label>
                                  <select
                                    @change="fetchGuardianThana"
                                    name="district"
                                    id="district"
                                    class="form-control"
                                    v-model="guardian_district"
                                  >
                                    <option selected disabled value="">
                                      Select District
                                    </option>
                                    <option
                                      v-for="(district, index) in guardianDistricts"
                                      :key="index"
                                      :value="district"
                                      v-text="district.name"
                                    ></option>
                                  </select>
                                </div>
                              </div>
  
                              <div class="col-lg-3 col-md-6 col-sm-12">
                                <div class="form-group">
                                  <label for="thana">Thana / Upazila</label>
                                  <select
                                    @change="fetchGuardianUnion"
                                    name="thana"
                                    id="thana"
                                    class="form-control"
                                    v-model="guardian_thana"
                                  >
                                    <option selected disabled value="">
                                      Select Thana
                                    </option>
                                    <option
                                      v-for="(upazila, index) in guardianThana"
                                      :key="index"
                                      :value="upazila"
                                      v-text="upazila.name"
                                    ></option>
                                  </select>
                                </div>
                              </div>
  
                              <div class="col-lg-3 col-md-6 col-sm-12">
                                <div class="form-group">
                                  <label for="union">Union</label>
                                  <select
                                    @change="fetchGuardianAddress"
                                    name="union"
                                    id="union"
                                    class="form-control"
                                    v-model="guardian_union"
                                  >
                                    <option selected disabled value="">
                                      Select Union
                                    </option>
                                    <option
                                      v-for="(union, index) in guardianUnions"
                                      :key="index"
                                      :value="union"
                                      v-text="union.name"
                                    ></option>
                                  </select>
                                </div>
                              </div>
  
                              <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                  <label for="permanent_add"
                                    >Road / House / Village</label
                                  >
                                  <input
                                    @keyup="guardianAdd"
                                    placeholder="Road / House / Village"
                                    type="text"
                                    class="form-control"
                                    v-model="guardian_sub_address"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          </div>
                        </div>
                      </div>
  
                      <ul
                        class="pager wizard twitter-bs-wizard-pager-link text-right"
                      >
                        <button
                          type="button"
                          @click="previewStep(2)"
                          class="btn btn-info"
                        >
                          Previous
                        </button>
  
                        <button
                          type="button"
                          @click="nextStep('family')"
                          class="btn btn-success"
                        >
                          Next
                        </button>
                      </ul>
                    </div>
                  </div>
  
                  <!-- {{ --education--}} -->
                  <div class="tab-pane" :class="educationStep ? 'active' : ''">
                    <div>
                      <div class="card mb-2">
                        <div class="card-header">
                          Back Ground Education Info 
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12">
                              <div class="form-group">
                                <label for="previous_institute"
                                  >Name of Previous Institute
                                  <span class="text-danger">*</span></label
                                >
                                <input
                                  id="previous_institute"
                                  type="text"
                                  class="form-control"
                                  v-model="student.previous_institute"
                                  placeholder="Enter previous institute"
                                  required
                                />
                                <small
                                  v-if="errors.previous_institute"
                                  class="text-danger with-errors"
                                  v-html="errors.previous_institute[0]"
                                ></small>
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12">
                              <div class="form-group">
                                <label for="last_program_of_study"
                                  >Last Program of Study <span class="text-danger">*</span></label
                                >
                                <input
                                  id="last_program_of_study"
                                  type="text"
                                  class="form-control"
                                  v-model="student.last_program_of_study"
                                  placeholder="Enter last program of study"
                                  required
                                />
                                <small
                                  v-if="errors.last_program_of_study"
                                  class="text-danger with-errors"
                                  v-html="errors.last_program_of_study[0]"
                                ></small>
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12">
                              <div class="form-group">
                                <label for="name_of_examiner"
                                  >Name of Examiner <span class="text-danger">*</span></label
                                >
                                <input
                                  id="name_of_examiner"
                                  type="text"
                                  class="form-control"
                                  v-model="student.name_of_examiner"
                                  placeholder="Enter name of examiner"
                                />
  
                                <small
                                  v-if="errors.name_of_examiner"
                                  class="text-danger with-errors"
                                  v-html="errors.name_of_examiner[0]"
                                ></small>
                              </div>
                            </div>                     
  
                            <div class="col-lg-6 col-md-6 col-sm-12">
                              <div class="form-group">
                                <label for="remark_of_examiner"
                                  >Remarks of Examiner
                                  <span class="text-danger">*</span></label
                                >
                                <input
                                  id="remark_of_examiner"
                                  type="text"
                                  class="form-control"
                                  v-model="student.remark_of_examiner"
                                  placeholder="Enter remark of examiner"
                                />
  
                                <small
                                  v-if="errors.remark_of_examiner"
                                  class="text-danger with-errors"
                                  v-html="errors.remark_of_examiner[0]"
                                ></small>
                              </div>
                            </div>
  
                            <div class="card-body">
                            <div class="row">
                              <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                  <label for="permanent_add"
                                    >Institute Address
                                    <span class="text-danger">*</span></label
                                  >
                                  <textarea
                                    name="permanent_add"
                                    v-model="student.institute_add"
                                    class="form-control"
                                    id="permanent_add"
                                    cols="30"
                                    rows="3"
                                    placeholder="Enter permanent add"
                                    required
                                  ></textarea>
                                  <small
                                    v-if="errors.institute_add"
                                    class="text-danger with-errors"
                                    v-html="errors.institute_add[0]"
                                  ></small>
                                </div>
                              </div>
  
                              <div class="col-lg-3 col-md-6 col-sm-12">
                                <div class="form-group">
                                  <label for="division">Division</label>
                                  <select
                                    @change="fetchInstituteDistricts"
                                    name="division"
                                    id="division"
                                    class="form-control"
                                    v-model="institute_division"
                                  >
                                    <option selected disabled value="">
                                      Select Devision
                                    </option>
                                    <option
                                      v-for="(division, index) in instituteDivisions"
                                      :key="index"
                                      :value="division"
                                      v-text="division.name"
                                    ></option>
                                  </select>
                                </div>
                              </div>
  
                              <div class="col-lg-3 col-md-6 col-sm-12">
                                <div class="form-group">
                                  <label for="district">District</label>
                                  <select
                                    @change="fetchInstituteThana"
                                    name="district"
                                    id="district"
                                    class="form-control"
                                    v-model="institute_district"
                                  >
                                    <option selected disabled value="">
                                      Select District
                                    </option>
                                    <option
                                      v-for="(district, index) in instituteDistricts"
                                      :key="index"
                                      :value="district"
                                      v-text="district.name"
                                    ></option>
                                  </select>
                                </div>
                              </div>
  
                              <div class="col-lg-3 col-md-6 col-sm-12">
                                <div class="form-group">
                                  <label for="thana">Thana / Upazila</label>
                                  <select
                                    @change="fetchInstituteUnion"
                                    name="thana"
                                    id="thana"
                                    class="form-control"
                                    v-model="institute_thana"
                                  >
                                    <option selected disabled value="">
                                      Select Thana
                                    </option>
                                    <option
                                      v-for="(upazila, index) in instituteThanas"
                                      :key="index"
                                      :value="upazila"
                                      v-text="upazila.name"
                                    ></option>
                                  </select>
                                </div>
                              </div>
  
                              <div class="col-lg-3 col-md-6 col-sm-12">
                                <div class="form-group">
                                  <label for="union">Union</label>
                                  <select
                                    @change="fetchInstituteAddress"
                                    name="union"
                                    id="union"
                                    class="form-control"
                                    v-model="institute_union"
                                  >
                                    <option selected disabled value="">
                                      Select Union
                                    </option>
                                    <option
                                      v-for="(union, index) in instituteUnions"
                                      :key="index"
                                      :value="union"
                                      v-text="union.name"
                                    ></option>
                                  </select>
                                </div>
                              </div>
  
                              <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                  <label for="permanent_add"
                                    >Road / House / Village</label
                                  >
                                  <input
                                    @keyup="instituteAdd"
                                    placeholder="Road / House / Village"
                                    type="text"
                                    class="form-control"
                                    v-model="institute_sub_address"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
  
                            
  
                         
                          </div>
                        </div>
                      </div>
  
                                        
  
                      <ul
                        class="pager wizard twitter-bs-wizard-pager-link text-right"
                      >
                        <button
                          type="button"
                          @click="previewStep(3)"
                          class="btn btn-info"
                        >
                          Previous
                        </button>
  
                        <button
                          type="button"
                          @click="submitForm()"
                          class="btn btn-success"
                        >
                          Submit
                        </button>
                      </ul>
                    </div>
                  </div>
  
                  
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    layout: "Adm-content",
  
    computed: {
      years() {
        const year = new Date().getFullYear();
        let data = Array.from(
          { length: year + 1 - 2020 },
          (value, index) => 2020 + index
        );
        return data.slice().reverse();
      },
    },
    mounted() {
    //   this.fetchDepartmentInfo();
      this.fatchStudentInfo();  
      this.fetchDivision();
    },
    data() {
      return {
        generalStep:true,
        personalStep: false,
        familyStep: false,
        educationStep: false,
        
  
        same_as_permanent: false,
  
        student: {
          department_id: "",
          batch_id: "",
          shift_id: "",
          group_id: "",
          adm_frm_sl: "",    
          roll_no: "",
          reg_no: "",
  
          //personal
          student_name_bangla: "",
          student_name_english: "",
          blood_group: "",
          gender: "",
          dob: "",   
          std_birth_no: "",
          permanent_add: "",
          mailing_add: "",
          //family
          f_name: "",
          f_cellno1: "",
          f_cellno2: "",
          f_occu: "",
          f_nid_no: "",
          m_name: "",
          m_cellno1: "",
          m_cellno2: "",
          m_occu: "",
          m_nid_no: "",
          g_name: "",
          g_cellno1: "",
          g_cellno2: "",        
          g_occu: "",
          g_nid_no: "",
          //education
          previous_institute: "",
          last_program_of_study: "",
          name_of_examiner: "",        
          remark_of_examiner: "",
          
        },
  
        errors: "",
        loading: false,
        departments: "",
        batches: "",
        shifts: "",
        groups: "",
        bloods: [
          { value: "", text: "Please select an option", disabled: true },
          { value: "UN", text: "UN" },
          { value: "A+", text: "A+" },
          { value: "A-", text: "A-" },
          { value: "B+", text: "B+" },
          { value: "B-", text: "B-" },
          { value: "O+", text: "O+" },
          { value: "O-", text: "O-" },
          { value: "AB+", text: "AB+" },
          { value: "AB-", text: "AB-" },
        ],
  
        countries: [],
        refereedByParents: [],     
        file_path: "",
        birth_certificate_photo_path: "",
        f_photo_path: "",
        g_photo_path: "",
  
        permanent_division: {},
        permanent_district: {},
        permanent_thana: {},
        permanent_union: {},
        permanent_sub_address: "",
  
        mailing_division: {},
        mailing_district: {},
        mailing_thana: {},
        mailing_union: {},
        mailing_sub_address: "",
  
        religions: [],
  
        divisions: [],
        districts: [],
        upazilas: [],
        unions: [],
  
        mailingDivisions: [],
        mailingDistricts: [],
        mailingUpazilas: [],
        mailingUnions: [],
  
        guardian_add:"",
        guardian_sub_address:"",
        guardianDivisions: [],
        guardianDistricts: [],
        guardianThana: [],
        guardianUnions: [],
  
        guardian_division: {},
        guardian_district: {},
        guardian_thana: {},
        guardian_union: {},
        guardian_sub_address: "",
  
        institute_add:"",
        institute_sub_address:"",
        instituteDivisions: [],
        instituteDistricts: [],
        instituteThanas: [],
        instituteUnions: [],
  
        institute_division: {},
        institute_district: {},
        institute_thana: {},
        institute_union: {},
        institute_sub_address: "",
      };
    },
    methods: {

        fetchDepartmentInfo() {
        this.$axios
          .$get("/admission/department")
          .then((response) => {
            this.departments = response;
            
          })
          .catch((error) => {
            this.$toaster.error("Department Not found");
          });
      },
    
  
      fetchBatch() {
        this.$axios
          .$get("/admission/batch/" + this.student.department_id)
          .then((response) => {
            this.batches = response.data;
          })
          .catch((error) => {
            this.$toaster.error("Batch Not found");
          });
      },
  
      fetchShiftGroup() {
        this.$axios
          .$get("/admission/shift-group/" + this.student.batch_id)
          .then((response) => {
            this.shifts = response;
            this.groups = response;
          })
          .catch((error) => {
            this.$toaster.error("Batch Not found");
          });
      },
      fatchStudentInfo() {
        this.$axios
          .$get("/admission/student-edit/"+ this.$route.params.id)
          .then((response) => {
            this.student = response;
            this.fetchDepartmentInfo();
            this.fetchBatch();
            this.fetchShiftGroup();            
          })
          .catch((error) => {
            this.$toaster.error("Student Not found");
          });
      },
      fetchDivision() {
        this.$axios
          .$get("admission/division")
          .then((response) => {
            this.divisions = response;
            this.mailingDivisions = response;
            this.guardianDivisions = response;
            this.instituteDivisions = response;
          })
          .catch((error) => {
            toastr.error("Divisions Not found");
          });
      },
  
      fetchPermanentDistricts() {
        this.$axios
          .$get("/admission/district/" + this.permanent_division.id)
          .then((response) => {
            this.districts = response;
  
            this.permanentAdd();
          })
          .catch((error) => {
            toastr.error("Districts Not found");
          });
      },
  
      fetchPermanentThana() {
        this.$axios
          .$get("/admission/thana/" + this.permanent_district.id)
          .then((response) => {
            this.upazilas = response;
            this.permanentAdd();
          })
          .catch((error) => {
            toastr.error("Upazilas Not found");
          });
      },
  
      fetchPermanentUnion() {
        this.$axios
          .$get("/admission/union/" + this.permanent_thana.id)
          .then((response) => {
            this.unions = response;
            this.permanentAdd();
          })
          .catch((error) => {
            toastr.error("Unions Not found");
          });
      },
  
      fetchPermanentAddress() {
        this.permanentAdd();
      },
  
      sameAsPermanent() {
        if (!this.same_as_permanent) {
          this.student.mailing_add = this.student.permanent_add;
        } else {
          this.student.mailing_add = "";
        }
      },
  
      fetchMailingtDistricts() {
        this.$axios
          .$get("/admission/district/" + this.mailing_division.id)
          .then((response) => {
            this.mailingDistricts = response;
            this.mailingAdd();
          })
          .catch((error) => {
            toastr.error("Districts Not found");
          });
      },
  
      fetchMailingThana() {
        this.$axios
          .$get("admission/thana/" + this.mailing_district.id)
          .then((response) => {
            this.mailingUpazilas = response;
            this.mailingAdd();
          })
          .catch((error) => {
            toastr.error("Upazilas Not found");
          });
      },
  
      fetchMailingtUnion() {
        this.$axios
          .$get("/admission/union/" + this.mailing_thana.id)
          .then((response) => {
            this.mailingUnions = response;
            this.mailingAdd();
          })
          .catch((error) => {
            toastr.error("Unions Not found");
          });
      },
  
      fetchMailingAddress() {
        this.mailingAdd();
      }, 
  
      fetchGuardiantDistricts() {
        this.$axios
          .$get("/admission/district/" + this.guardian_division.id)
          .then((response) => {
            this.guardianDistricts = response;
  
            this.guardianAdd();
          })
          .catch((error) => {
            toastr.error("Districts Not found");
          });
      },
  
      fetchGuardianThana() {
        this.$axios
          .$get("/admission/thana/" + this.guardian_district.id)
          .then((response) => {
            this.guardianThana = response;
            this.guardianAdd();
          })
          .catch((error) => {
            toastr.error("Upazilas Not found");
          });
      },
  
      fetchGuardianUnion() {
        this.$axios
          .$get("/admission/union/" + this.guardian_thana.id)
          .then((response) => {
            this.guardianUnions = response;
            this.guardianAdd();
          })
          .catch((error) => {
            toastr.error("Unions Not found");
          });
      },
      fetchGuardianAddress(){
          this.guardianAdd();
      },
  
      fetchInstituteDistricts() {
        this.$axios
          .$get("/admission/district/" + this.institute_division.id)
          .then((response) => {
            this.instituteDistricts = response;
            this.instituteAdd();
          })
          .catch((error) => {
            toastr.error("Districts Not found");
          });
      },
  
      fetchInstituteThana() {
        this.$axios
          .$get("/admission/thana/" + this.institute_district.id)
          .then((response) => {
            this.instituteThanas = response;
            this.instituteAdd();
          })
          .catch((error) => {
            toastr.error("Upazilas Not found");
          });
      },
  
      fetchInstituteUnion() {
        this.$axios
          .$get("/admission/union/" + this.institute_thana.id)
          .then((response) => {
            this.instituteUnions = response;
            this.instituteAdd();
          })
          .catch((error) => {
            toastr.error("Unions Not found");
          });
      },
      fetchInstituteAddress() {
        this.instituteAdd();
      },
  
      previewStep(step) {
        if (step == 1) {
          this.generalStep = true;
          this.personalStep = false;
          this.familyStep = false;
          this.educationStep = false;        
        } else if (step == 2) {
          this.generalStep = false;
          this.personalStep = true;
          this.familyStep = false;
          this.educationStep = false;        
        } else if (step == 3) {
          this.generalStep = false;
          this.personalStep = false;
          this.familyStep = true;
          this.educationStep = false;        
        } else {
          this.generalStep = false;
          this.personalStep = false;
          this.familyStep = false;
          this.educationStep = true;        
        }
      },
  
      permanentAdd() {
        let permanent_sub_address = "";
        if (this.permanent_sub_address) {
          permanent_sub_address = `${this.permanent_sub_address},`;
        }
  
        let permanent_union = "";
        if (this.permanent_union?.name) {
          permanent_union = `${this.permanent_union?.name},`;
        }
  
        let permanent_thana = "";
        if (this.permanent_thana?.name) {
          permanent_thana = `${this.permanent_thana?.name},`;
        }
  
        let permanent_district = "";
        if (this.permanent_district?.name) {
          permanent_district = `${this.permanent_district?.name},`;
        }
  
        let permanent_division = "";
        if (this.permanent_division?.name) {
          permanent_division = `${this.permanent_division?.name}`;
        }
  
        this.student.permanent_add = `${permanent_sub_address}${permanent_union}${permanent_thana}${permanent_district}${permanent_division}`;
      },
  
      mailingAdd() {
        let mailing_sub_address = "";
        if (this.mailing_sub_address) {
          mailing_sub_address = `${this.mailing_sub_address},`;
        }
  
        let mailing_union = "";
        if (this.mailing_union?.name) {
          mailing_union = `${this.mailing_union?.name},`;
        }
  
        let mailing_thana = "";
        if (this.mailing_thana?.name) {
          mailing_thana = `${this.mailing_thana?.name},`;
        }
  
        let mailing_district = "";
        if (this.mailing_district?.name) {
          mailing_district = `${this.mailing_district?.name},`;
        }
  
        let mailing_division = "";
        if (this.mailing_division?.name) {
          mailing_division = `${this.mailing_division?.name}`;
        }
  
        this.student.mailing_add = `${mailing_sub_address}${mailing_union}${mailing_thana}${mailing_district}${mailing_division}`;
      },
      guardianAdd() {
        let guardian_sub_address = "";
        if (this.guardian_sub_address) {
          guardian_sub_address = `${this.guardian_sub_address},`;
        }
  
        let guardian_union = "";
        if (this.guardian_union?.name) {
          guardian_union = `${this.guardian_union?.name},`;
        }
  
        let guardian_thana = "";
        if (this.guardian_thana?.name) {
          guardian_thana = `${this.guardian_thana?.name},`;
        }
  
        let guardian_district = "";
        if (this.guardian_district?.name) {
          guardian_district = `${this.guardian_district?.name},`;
        }
  
        let guardian_division = "";
        if (this.guardian_division?.name) {
          guardian_division = `${this.guardian_division?.name}`;
        }
  
        this.student.guardian_add = `${guardian_sub_address}${guardian_union}${guardian_thana}${guardian_district}${guardian_division}`;
      },
      instituteAdd() {
        let institute_sub_address = "";
        if (this.institute_sub_address) {
          institute_sub_address = `${this.institute_sub_address},`;
        }
  
        let institute_union = "";
        if (this.institute_union?.name) {
          institute_union = `${this.institute_union?.name},`;
        }
  
        let institute_thana = "";
        if (this.institute_thana?.name) {
          institute_thana = `${this.institute_thana?.name},`;
        }
  
        let institute_district = "";
        if (this.institute_district?.name) {
          institute_district = `${this.institute_district?.name},`;
        }
  
        let institute_division = "";
        if (this.institute_division?.name) {
          institute_division = `${this.institute_division?.name}`;
        }
  
        this.student.institute_add = `${institute_sub_address}${institute_union}${institute_thana}${institute_district}${institute_division}`;
      },
  
      nextStep(stepName) {
          if (stepName == "general") {
            this.generalInfo();
          }
  
        if (stepName == "personal") {
          this.personalInfo();
        }
  
        if (stepName == "family") {
          this.familyInfo();
        }
  
        if (stepName == "education") {
          this.educationInfo();
        }
      },
  
      generalInfo() {
        if (!this.student.department_id) {
          this.$toaster.error("Please select department");
          return false;
        }
  
        if (!this.student.batch_id) {
          this.$toaster.error("Please select batch");
          return false;
        }
  
        if (!this.student.shift_id) {
          this.$toaster.error("Please select shift");
          return false;
        }
  
        if (!this.student.group_id) {
          this.$toaster.error("Please select group");
          return false;
        }
  
        if (!this.student.adm_frm_sl) {
          this.$toaster.error("Please enter admission form sl");
          return false;
        }
  
        this.generalStep = false;
        this.personalStep = true;
        this.familyStep = false;
        this.educationStep = false;
        
      
      },
  
      personalInfo() {
        if (!this.student.student_name_bangla) {
          this.$toaster.error("Please enter student bangla name");
          return false;
        }
        if (!this.student.student_name_english) {
          this.$toaster.error("Please enter student english name");
          return false;
        }
  
        if (!this.student.blood_group) {
          this.$toaster.error("Please select blood group");
          return false;
        }
  
        if (!this.student.gender) {
          this.$toaster.error("Please select gender");
          return false;
        }
  
        if (!this.student.dob) {
          this.$toaster.error("Please select date of birth");
          return false;
        }  
  
      
  
        if (!this.student.std_birth_no) {
          this.$toaster.error("Please enter birth certificate No");
          return false;
        }
    
  
        if (!this.student.permanent_add) {
          this.$toaster.error("Please enter permanent address");
          return false;
        }
  
        if (!this.student.mailing_add) {
          this.$toaster.error("Please enter mailing address");
          return false;
        }
  
        this.generalStep = false;
        this.personalStep = false;
        this.familyStep = true;
        this.educationStep = false;
        
        
      },
  
      familyInfo() {
        if (!this.student.f_name) {
          this.$toaster.error("Please enter father name");
          return false;
        }
  
        if (!this.student.f_cellno1) {
          this.$toaster.error("Please enter father cell");
          return false;
        }
  
        if (!this.student.f_nid_no) {
          this.$toaster.error("Please enter father nid");
          return false;
        }
  
        if (!this.student.m_name) {
          this.$toaster.error("Please enter mother name");
          return false;
        }
        if (!this.student.m_cellno1) {
          this.$toaster.error("Please enter mother cell");
          return false;
        }
  
        if (!this.student.m_nid_no) {
          this.$toaster.error("Please enter mother nid");
          return false;
        }
        if (!this.student.g_name) {
          this.$toaster.error("Please enter guardian name");
          return false;
        }
        if (!this.student.g_cellno1) {
          this.$toaster.error("Please enter guardian cell");
          return false;
        }
  
        if (!this.student.g_nid_no) {
          this.$toaster.error("Please enter guardian nid");
          return false;
        }
        if (!this.student.guardian_add) {
          this.$toaster.error("Please enter guardian address");
          return false;
        }
     
       
  
       
  
        this.generalStep = false;
        this.personalStep = false;
        this.familyStep = false;
        this.educationStep = true;      
        
      },
  
      educationInfo() {
        if (!this.student.previous_institute) {
          this.$toaster.error(
            "Please Enter Name of Previous Institute"
          );
          return false;
        }
  
        if (!this.student.last_program_of_study) {
          this.$toaster.error(
            "Please Enter Last Program of Study");
          return false;
        }
  
        if (!this.student.name_of_examiner) {
          this.$toaster.error("Please Enter Name of Examiner");
          return false;
        }
    
  
        if (!this.student.remark_of_examiner) {
          this.$toaster.error(
            "Please enter Remarks of Examiner");
          return false;
        }
  
        this.generalStep = false;
        this.personalStep = false;
        this.familyStep = false;
        this.educationStep = false;      
        
      },
  
      sameAsPermanent() {
        if (!this.same_as_permanent) {
          this.student.mailing_add = this.student.permanent_add;
        } else {
          this.student.mailing_add = "";
        }
      },
  
      submitForm() {
        let formData = new FormData();
  
        for (const property in this.student) {
          formData.append(`${property}`, `${this.student[property]}`);
        }   
  
        this.$axios
          .$post("/admission/student-update/"+ this.$route.params.id, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            this.$toaster.success(response.message);
            this.$router.push("/admission/search-student");
          })
          .catch((error) => {
              ;
            if (error.response.status == 422) {
              console.log(error.response.data.errors)
              this.errors = error.response.data.errors;
              this.$toaster.error("Validation error");
              return false;
            }
  
            this.$toaster.error("Something went wrong");
          });
      },
  
      fileValidationCheck() {
        let FileSize =
          document.getElementById("file_input").files[0].size / 1024 / 1024; // in MiB // 1MB
  
        const file = document.getElementById("file_input").files[0];
        this.file_path = URL.createObjectURL(file);
  
        if (FileSize > 1) {
          alert("File max size must be 1024KB");
          $("#file_input").val("");
          this.file_path = "";
          return false;
        }
      },
  
      fileBirthCertificateValidationCheck() {
        let FileSize =
          document.getElementById("birth_certificate_photo").files[0].size /
          500 /
          500; // in MiB // 1MB
  
        const file = document.getElementById("birth_certificate_photo").files[0];
        this.birth_certificate_photo_path = URL.createObjectURL(file);
  
        if (FileSize > 1) {
          alert("File max size must be 500KB");
          $("#birth_certificate_photo").val("");
          this.birth_certificate_photo_path = "";
          return false;
        }
      },
      fileFatherValidationCheck() {
        let FileSize =
          document.getElementById("f_photo").files[0].size / 500 / 500; // in MiB // 1MB
  
        const file = document.getElementById("f_photo").files[0];
        this.f_photo_path = URL.createObjectURL(file);
  
        if (FileSize > 1) {
          alert("File max size must be 500KB");
          $("#f_photo").val("");
          this.f_photo_path = "";
          return false;
        }
      },
      fileGuardianValidationCheck() {
        let FileSize =
          document.getElementById("g_photo").files[0].size / 500 / 500; // in MiB // 1MB
  
        const file = document.getElementById("g_photo").files[0];
        this.g_photo_path = URL.createObjectURL(file);
  
        if (FileSize > 1) {
          alert("File max size must be 500KB");
          $("#g_photo").val("");
          this.birth_certificate_photo_path = "";
          return false;
        }
      },
    },
  };
  
  // $('.form-control').selectpicker({
  //     liveSearch: true,
  //     size: 5
  // });
  </script>
  <style scoped>
  ul li {
    text-decoration: none;
    list-style: none;
  }
  
  .bootstrap-select:not([class*="col-"]):not([class*="form-control"]):not(.input-group-btn) {
    width: 100% !important;
  }
  
  .btn-light {
    height: 35px !important;
  }
  
  .dropdown-toggle::after {
    position: absolute;
    right: 10px;
  }
  
  .dropdown-menu {
    min-width: 0px !important;
  }
  
  /*vue datepicker design problem solve*/
  input[placeholder="SELECT DATE"] {
    width: 100%;
    border: 2px solid #1976d2;
    border-radius: 3px;
    height: 38px;
    padding: 0 10px;
  }
  
  .day__month_btn,
  .month__year_btn {
    color: #000 !important;
  }
  
  .prev,
  .next {
    padding: 0 !important;
    background: none !important;
  }
  
  /*vue datepicker design problem solve*/
  
  .mt-10 {
    margin-top: 10px;
  }
  
  .nav-link.active {
    color: #ffffff;
    background-color: #423a3d;
  }
  
  .bg-1 {
    background-color: #f45e55;
    border-radius: 100%;
    color: #f45e55;
  }
  
  .bg-2 {
    background-color: #f8bb45;
    border-radius: 100%;
    color: #f8bb45;
  }
  
  .bg-3 {
    background-color: #43cb47;
    border-radius: 100%;
    color: #43cb47;
  }
  
  .h5 {
    color: #0b0b0b;
    font-weight: bold;
  }
  
  .job-preview-list {
    list-style: none;
  }
  
  .nav-item a {
    text-align: center !important;
  }
  </style>
  