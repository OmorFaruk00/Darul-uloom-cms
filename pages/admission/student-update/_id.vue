<template>
    <div>
        <div class="card mx-auto">
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

                            <li class="nav-item" v-if="othersStep">
                                <a class="nav-link" :class="othersStep ? 'active' : ''">
                                    <span class="step-number mr-2">05.</span> Others
                                </a>
                            </li>
                        </ul>

                        <div class="mt-3">
                            <div class="tab-content twitter-bs-wizard-tab-content">
                                <!-- {{ --general--}} -->
                                
                                <div class="tab-pane" :class="generalStep ? 'active' : ''">
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label">Department <span
                                                class="text-danger">*</span></label>
                                        <div class="col-md-9 mt-10">
                                            <select name="department_id" v-model="student.department_id"
                                                id="department_id" class="form-control" required @change="fetchBatch">
                                                <option value="" disabled selected>Select Department</option>
                                                <option disable v-for="(department, index) in departments" :key="index"
                                                    :value="department.id" v-text="department.department_name"></option>
                                            </select>

                                            <small v-if="errors.department_id" class="text-danger with-errors"
                                                v-html="errors.department_id[0]"></small>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label">Batch <span
                                                class="text-danger">*</span></label>
                                        <div class="col-md-9 mt-10">                                            
                                            <select class="form-control" v-model="student.batch_id" required
                                                @change="fetchShiftGroup">
                                                <option disabled selected value="">Select Batch</option>
                                                <option v-for="batch in batches" :key="batch.id" :value="batch.id"
                                                    v-text="batch.batch_name">
                                                </option>
                                            </select>

                                            <small v-if="errors.batch_id" class="text-danger with-errors"
                                                v-html="errors.batch_id[0]"></small>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label">Shift <span
                                                class="text-danger">*</span></label>
                                        <div class="col-md-9 mt-10">                                            
                                            <select name="shift_id" v-model="student.shift_id" id="shift_id"
                                                class="form-control" required>
                                                <option value="" disabled selected>Select Shift</option>
                                                <option v-for="(shift, index) in shifts" :key="index" :value="shift.id"
                                                    v-html="shift.shift"></option>
                                            </select>
                                            <small v-if="errors.shift_id" class="text-danger with-errors"
                                                v-html="errors.shift_id[0]"></small>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label">Group <span
                                                class="text-danger">*</span></label>
                                        <div class="col-md-9 mt-10">                                            
                                            <select name="group_id" v-model="student.group_id" id="group_id"
                                                class="form-control" required>
                                                <option value="" disabled selected>Select Group</option>
                                                <option v-for="(group, index) in groups" :key="index" :value="group.id"
                                                    v-html="group.group"></option>
                                            </select>

                                            <small v-if="errors.group_id" class="text-danger with-errors"
                                                v-html="errors.group_id[0]"></small>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label">Roll No<span
                                                class="text-danger">*</span></label>
                                        <div class="col-md-9 mt-10">
                                            <input type="text" class="form-control" placeholder="Enter Roll Number"
                                                v-model="student.roll_no" />

                                            <small v-if="errors.roll_no" class="text-danger with-errors"
                                                v-html="errors.roll_no[0]"></small>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label">REG No<span
                                                class="text-danger">*</span></label>
                                        <div class="col-md-9 mt-10">
                                            <input type="text" class="form-control" placeholder="Enter Reg Number"
                                                v-model="student.reg_code" />

                                            <small v-if="errors.reg_code" class="text-danger with-errors"
                                                v-html="errors.reg_code[0]"></small>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label">Admission Form Sl
                                            <span class="text-danger">*</span></label>
                                        <div class="col-md-9 mt-10">
                                            <input class="form-control" name="adm_frm_sl" v-model="student.adm_frm_sl"
                                                placeholder="Enter Admission Form Sl No" required />

                                            <small v-if="errors.adm_frm_sl" class="text-danger with-errors"
                                                v-html="errors.adm_frm_sl[0]"></small>
                                        </div>
                                    </div>            

                                    <ul class="pager wizard twitter-bs-wizard-pager-link text-right">
                                        <button type="button" @click="nextStep('general')" class="btn btn-success">
                                            Next
                                        </button>
                                    </ul>
                                </div>
                               
                                <!-- {{ --personal--}} -->
                                <div class="tab-pane" :class="personalStep ? 'active' : ''">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label for="student_name">Student Name
                                                    <span class="text-danger">*</span></label>
                                                <input id="student_name" type="text" class="form-control"
                                                    v-model="student.student_name" placeholder="Enter student name"
                                                    required />

                                                <small v-if="errors.student_name" class="text-danger with-errors"
                                                    v-html="errors.student_name[0]"></small>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label for="blood_group">Blood Group <span
                                                        class="text-danger">*</span></label>

                                                <select name="blood_group" v-model="student.blood_group"
                                                    id="blood_group" class="form-control" required>
                                                    <option v-for="(blood, index) in bloods" :key="index"
                                                        :value="blood.value" v-text="blood.text"></option>
                                                </select>

                                                <small v-if="errors.blood_group" class="text-danger with-errors"
                                                    v-html="errors.blood_group[0]"></small>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label for="email">Email (Student Personal Email)
                                                    <span class="text-danger">*</span></label>

                                                <input id="email" type="email" class="form-control"
                                                    v-model="student.email" placeholder="Enter email address" />

                                                <small v-if="errors.email" class="text-danger with-errors"
                                                    v-html="errors.email[0]"></small>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label for="phone_no">Student Mobile Number
                                                    <span class="text-danger">*</span></label>

                                                <input id="phone_no" type="number" class="form-control"
                                                    v-model="student.phone_no" placeholder="Enter phone no" required />

                                                <small v-if="errors.phone_no" class="text-danger with-errors"
                                                    v-html="errors.phone_no[0]"></small>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label for="religion">Religion <span
                                                        class="text-danger">*</span></label>

                                                <select name="religion_id" id="religion_id"
                                                    v-model="student.religion_id" class="form-control">
                                                    <option value="" disabled selected>Select Religion</option>
                                                    <option value="1">Islam</option>
                                                    <!-- <option v-for="(religion, index) in religions" :key="index"
                                                        :value="religion.id" v-text="religion.name"></option> -->
                                                </select>

                                                <small v-if="errors.religion_id" class="text-danger with-errors"
                                                    v-html="errors.religion_id[0]"></small>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label for="gender">Gender <span class="text-danger">*</span></label>

                                                <select name="gender" id="gender" v-model="student.gender"
                                                    class="form-control">
                                                    <option value="" selected disabled hidden>
                                                        Select one
                                                    </option>
                                                    <option value="M">Male</option>
                                                    <option value="F">Female</option>
                                                    <option value="O">Other</option>
                                                </select>

                                                <small v-if="errors.phone_no" class="text-danger with-errors"
                                                    v-html="errors.phone_no[0]"></small>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label for="dob">Date of Birth
                                                    <span class="text-danger">*</span></label>

                                                <input type="date" name="dob" class="form-control"
                                                    v-model="student.dob" />

                                                <!-- <vuejs-datepicker v-model="student.dob"
                                                              placeholder="SELECT DATE"></vuejs-datepicker> -->

                                                <small v-if="errors.dob" class="text-danger with-errors"
                                                    v-html="errors.dob[0]"></small>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label for="birth_place">Birth Place <span
                                                        class="text-danger">*</span></label>
                                                <input type="text" class="form-control" v-model="student.birth_place"
                                                    placeholder="Enter birth place" />
                                                <small v-if="errors.birth_place" class="text-danger with-errors"
                                                    v-html="errors.birth_place[0]"></small>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label for="fg_monthly_income">Monthly Income of Father/Guardian</label>
                                                <input type="number" class="form-control"
                                                    v-model="student.fg_monthly_income"
                                                    placeholder="monthly Income of Father/Guardian" />
                                                <small v-if="errors.fg_monthly_income" class="text-danger with-errors"
                                                    v-html="errors.fg_monthly_income[0]"></small>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label for="nationality">Nationality <span
                                                        class="text-danger">*</span></label>

                                                <select name="country" id="country" class="form-control"
                                                    v-model="student.nationality">
                                                    <option value="" disabled selected>Select Nationality</option>
                                                    <option value="Bangladeshi">Bangladeshi</option>
                                                    <!-- <option v-for="(country, index) in countries" :key="index"
                                                        :value="country.name" v-html="country.name"></option> -->
                                                </select>

                                                <small v-if="errors.nationality" class="text-danger with-errors"
                                                    v-html="errors.nationality[0]"></small>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label for="std_birth_or_nid_no">Birth or NID or Passport No
                                                    <span class="text-danger">*</span></label>
                                                <input type="number" class="form-control"
                                                    v-model="student.std_birth_or_nid_no"
                                                    placeholder="Enter std birth or nid no" />
                                                <small v-if="errors.std_birth_or_nid_no" class="text-danger with-errors"
                                                    v-html="errors.std_birth_or_nid_no[0]"></small>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label for="marital_status">Marital ? <span
                                                        class="text-danger">*</span></label>

                                                <select name="marital_status" id="marital_status"
                                                    v-model="student.marital_status" class="form-control" required>
                                                    <option value="" selected disabled hidden>
                                                        Select one
                                                    </option>
                                                    <option value="N">No</option>
                                                    <option value="Y">Yes</option>
                                                </select>

                                                <small v-if="errors.marital_status" class="text-danger with-errors"
                                                    v-html="errors.marital_status[0]"></small>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label for="image">Image <span class="text-danger">*</span></label>
                                                <br />

                                                <input type="file" id="file_input" name="file"
                                                    v-on:change="fileValidationCheck" accept="image/*" required />

                                                <br />

                                                <span class="text-danger">File extension must be jpeg,jpg,png and max
                                                    file size
                                                    1024KB</span>
                                                <br />

                                                <img :src="base_url + '/images/student_photo/' + this.student.photo" alt="image"
                                                style="height:80px" />
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label for="signature">Signature <span
                                                        class="text-danger">*</span></label>
                                                <br />

                                                <input type="file" id="signature" name="signature"
                                                    v-on:change="fileSignatureValidationCheck" accept="image/*"
                                                    required />

                                                <br />

                                                <span class="text-danger">File extension must be jpeg,jpg,png and max
                                                    file size
                                                    500KB</span>
                                                <br />

                                               <img :src="base_url + '/images/student_signature/' + this.student.signature" alt="image"
                                                style="height:80px" />
                                            </div>
                                        </div>

                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                            <div class="card my-2">
                                                <div class="card-header">Permanent Add</div>
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                            <div class="form-group">
                                                                <label for="permanent_add">Permanent Add
                                                                    <span class="text-danger">*</span></label>
                                                                <textarea name="permanent_add"
                                                                    v-model="student.permanent_add" class="form-control"
                                                                    id="permanent_add" cols="30" rows="3"
                                                                    placeholder="Enter permanent add"
                                                                    required></textarea>
                                                                <small v-if="errors.permanent_add"
                                                                    class="text-danger with-errors"
                                                                    v-html="errors.permanent_add[0]"></small>
                                                            </div>
                                                        </div>

                                                       
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="card my-2">
                                                <div class="card-header">
                                                    Mailing Add

                                                    <div class="form-check">
                                                        <input class="form-check-input" @click="sameAsPermanent()"
                                                            type="checkbox" v-model="same_as_permanent" value="yes"
                                                            id="sameAsPermanent" />
                                                        <label class="form-check-label" for="sameAsPermanent">
                                                            Same as permanent
                                                        </label>
                                                    </div>
                                                </div>

                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                            <div class="form-group">
                                                                <label for="mailing_add">Mailing Add
                                                                    <span class="text-danger">*</span></label>
                                                                <textarea name="mailing_add"
                                                                    v-model="student.mailing_add" class="form-control"
                                                                    id="mailing_add" cols="30" rows="3"
                                                                    placeholder="Enter mailing add"></textarea>
                                                                <small v-if="errors.mailing_add"
                                                                    class="text-danger with-errors"
                                                                    v-html="errors.mailing_add[0]"></small>
                                                            </div>
                                                        </div>

                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="pager wizard twitter-bs-wizard-pager-link text-right">
                                        <button type="button" @click="previewStep(1)" class="btn btn-info">
                                            Previous
                                        </button>

                                        <button type="button" @click="nextStep('personal')" class="btn btn-success">
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
                                                            <label for="f_name">Name <span
                                                                    class="text-danger">*</span></label>
                                                            <input id="f_name" type="text" class="form-control"
                                                                v-model="student.f_name" placeholder="Enter father name"
                                                                required />

                                                            <small v-if="errors.f_name" class="text-danger with-errors"
                                                                v-html="errors.f_name[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="f_cellno">Cell <span
                                                                    class="text-danger">*</span></label>
                                                            <input id="f_cellno" type="text" class="form-control"
                                                                v-model="student.f_cellno" placeholder="Enter cell no"
                                                                required />

                                                            <small v-if="errors.f_cellno"
                                                                class="text-danger with-errors"
                                                                v-html="errors.f_cellno[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="f_occu">Occupation</label>
                                                            <input id="f_occu" type="text" class="form-control"
                                                                v-model="student.f_occu"
                                                                placeholder="Enter occupation" />

                                                            <small v-if="errors.f_occu" class="text-danger with-errors"
                                                                v-html="errors.f_occu[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="father_nid_no">NID No
                                                                <span class="text-danger">*</span></label>
                                                            <input id="father_nid_no" type="number" class="form-control"
                                                                v-model="student.father_nid_no"
                                                                placeholder="Enter nid" />

                                                            <small v-if="errors.father_nid_no"
                                                                class="text-danger with-errors"
                                                                v-html="errors.father_nid_no[0]"></small>
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
                                                            <label for="m_name">Name <span
                                                                    class="text-danger">*</span></label>
                                                            <input id="m_name" type="text" class="form-control"
                                                                v-model="student.m_name" placeholder="Enter mother name"
                                                                required />

                                                            <small v-if="errors.m_name" class="text-danger with-errors"
                                                                v-html="errors.m_name[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="m_cellno">Cell </label>
                                                            <input id="m_cellno" type="text" class="form-control"
                                                                v-model="student.m_cellno" placeholder="Enter cell no"
                                                                required />

                                                            <small v-if="errors.m_cellno"
                                                                class="text-danger with-errors"
                                                                v-html="errors.m_cellno[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="m_occu">Occupation</label>
                                                            <input id="m_occu" type="text" class="form-control"
                                                                v-model="student.m_occu"
                                                                placeholder="Enter occupation" />

                                                            <small v-if="errors.m_occu" class="text-danger with-errors"
                                                                v-html="errors.m_occu[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="mother_nid_no">NID No
                                                                <span class="text-danger">*</span></label>
                                                            <input id="mother_nid_no" type="number" class="form-control"
                                                                v-model="student.mother_nid_no"
                                                                placeholder="Enter nid" />

                                                            <small v-if="errors.mother_nid_no"
                                                                class="text-danger with-errors"
                                                                v-html="errors.mother_nid_no[0]"></small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card mb-2">
                                            <div class="card-header">Guardian and Emergency info</div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="g_name">G Name</label>
                                                            <input id="g_name" type="text" class="form-control"
                                                                v-model="student.g_name" placeholder="Enter g name" />

                                                            <small v-if="errors.g_name" class="text-danger with-errors"
                                                                v-html="errors.g_name[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="g_cellno">G Cell No</label>
                                                            <input id="g_cellno" type="text" class="form-control"
                                                                v-model="student.g_cellno" placeholder="Enter cell no"
                                                                required />

                                                            <small v-if="errors.g_cellno"
                                                                class="text-danger with-errors"
                                                                v-html="errors.g_cellno[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="g_occu">G Occupation</label>
                                                            <input id="g_occu" type="text" class="form-control"
                                                                v-model="student.g_occu"
                                                                placeholder="Enter occupation" />

                                                            <small v-if="errors.g_occu" class="text-danger with-errors"
                                                                v-html="errors.g_occu[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_name">Emergency Contact Person Name
                                                                <span class="text-danger">*</span></label>
                                                            <input id="e_name" type="text" class="form-control"
                                                                v-model="student.e_name" placeholder="Enter e name" />

                                                            <small v-if="errors.e_name" class="text-danger with-errors"
                                                                v-html="errors.e_name[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_cellno">Emergency Contact Person Cell No
                                                                <span class="text-danger">*</span></label>
                                                            <input id="e_cellno" type="number" class="form-control"
                                                                v-model="student.e_cellno" placeholder="Enter cell no"
                                                                required />

                                                            <small v-if="errors.e_cellno"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_cellno[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_occu">E Occupation</label>
                                                            <input id="e_occu" type="text" class="form-control"
                                                                v-model="student.e_occu"
                                                                placeholder="Enter occupation" />

                                                            <small v-if="errors.e_occu" class="text-danger with-errors"
                                                                v-html="errors.e_occu[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_relation">E Relation</label>
                                                            <input id="e_relation" type="text" class="form-control"
                                                                v-model="student.e_relation"
                                                                placeholder="Enter e relation" />

                                                            <small v-if="errors.e_relation"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_relation[0]"></small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <ul class="pager wizard twitter-bs-wizard-pager-link text-right">
                                            <button type="button" @click="previewStep(2)" class="btn btn-info">
                                                Previous
                                            </button>

                                            <button type="button" @click="nextStep('family')" class="btn btn-success">
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
                                                Back Ground Education Info 1
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_exam_name1">Name of Examination
                                                                <span class="text-danger">*</span></label>
                                                            <input id="e_exam_name1" type="text" class="form-control"  
                                                                v-model="education.exam_name1"
                                                                placeholder="Enter name of examination" required />

                                                            <small v-if="errors.e_exam_name1"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_exam_name1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_group1">Group <span
                                                                    class="text-danger">*</span></label>
                                                            <input id="e_group1" type="text" class="form-control"
                                                                v-model="education.group1" placeholder="Enter group no"
                                                                required />

                                                            <small v-if="errors.e_group1"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_group1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_roll_no_1">Roll <span
                                                                    class="text-danger">*</span></label>
                                                            <input id="e_roll_no_1" type="number" class="form-control"
                                                                v-model="education.roll_no1"
                                                                placeholder="Enter roll no" />

                                                            <small v-if="errors.e_roll_no_1"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_roll_no_1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_passing_year1">Passing Year
                                                                <span class="text-danger">*</span></label>
                                                            <select name="e_passing_year1" id="e_passing_year1"
                                                                v-model="education.passing_year1" class="form-control">
                                                                <option v-for="(year, index) in years" :key="index"
                                                                    :value="year" v-text="year"></option>
                                                            </select>

                                                            <small v-if="errors.e_passing_year1"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_passing_year1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_ltr_grd_tmarks1">Letter or Grade or Total
                                                                Marks
                                                                <span class="text-danger">*</span></label>
                                                            <input id="e_ltr_grd_tmarks1" type="text"
                                                                class="form-control" v-model="education.ltr_grd_tmarks1"
                                                                placeholder="Enter letter or grade or total marks" />

                                                            <small v-if="errors.e_ltr_grd_tmarks1"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_ltr_grd_tmarks1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_div_cls_cgpa1">Divission Or Class Or CGPA
                                                                <span class="text-danger">*</span></label>
                                                            <input id="e_div_cls_cgpa1" type="text" class="form-control"
                                                                v-model="education.div_cls_cgpa1"
                                                                placeholder="Enter Divission Or Class Or CGPA" />

                                                            <small v-if="errors.e_div_cls_cgpa1"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_div_cls_cgpa1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_board_institute1">Board Or Institute
                                                                <span class="text-danger">*</span></label>
                                                            <input id="e_board_institute1" type="text"
                                                                class="form-control"
                                                                v-model="education.board_institute1"
                                                                placeholder="Enter Board Or Institute" />

                                                            <small v-if="errors.e_board_institute1"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_board_institute1[0]"></small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card mb-2">
                                            <div class="card-header">
                                                Back Ground Education Info 2
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_exam_name2">Name of Examination
                                                                <span class="text-danger">*</span></label>
                                                            <input id="e_exam_name2" type="text" class="form-control"
                                                                v-model="student.e_exam_name2"
                                                                placeholder="Enter name of examination" required />

                                                            <small v-if="errors.e_exam_name2"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_exam_name1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_group2">Group <span
                                                                    class="text-danger">*</span></label>
                                                            <input id="e_group2" type="text" class="form-control"
                                                                v-model="student.e_group2" placeholder="Enter group no"
                                                                required />

                                                            <small v-if="errors.e_group2"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_group1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_roll_no_2">Roll <span
                                                                    class="text-danger">*</span></label>
                                                            <input id="e_roll_no_2" type="number" class="form-control"
                                                                v-model="student.e_roll_no_2"
                                                                placeholder="Enter roll no" />

                                                            <small v-if="errors.e_roll_no_2"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_roll_no_1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_passing_year2">Passing Year
                                                                <span class="text-danger">*</span></label>
                                                            <select name="e_passing_year2" id="e_passing_year2"
                                                                v-model="student.e_passing_year2" class="form-control">
                                                                <option v-for="(year, index) in years" :key="index"
                                                                    :value="year" v-text="year"></option>
                                                            </select>

                                                            <small v-if="errors.e_passing_year2"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_passing_year1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_ltr_grd_tmarks2">Letter or Grade or Total
                                                                Marks
                                                                <span class="text-danger">*</span></label>
                                                            <input id="e_ltr_grd_tmarks2" type="text"
                                                                class="form-control" v-model="student.e_ltr_grd_tmarks2"
                                                                placeholder="Enter letter or grade or total marks" />

                                                            <small v-if="errors.e_ltr_grd_tmarks2"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_ltr_grd_tmarks1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_div_cls_cgpa2">Divission Or Class Or CGPA
                                                                <span class="text-danger">*</span></label>
                                                            <input id="e_div_cls_cgpa2" type="text" class="form-control"
                                                                v-model="student.e_div_cls_cgpa2"
                                                                placeholder="Enter Divission Or Class Or CGPA" />

                                                            <small v-if="errors.e_div_cls_cgpa2"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_div_cls_cgpa1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_board_institute2">Board Or Institute
                                                                <span class="text-danger">*</span></label>
                                                            <input id="e_board_institute2" type="text"
                                                                class="form-control"
                                                                v-model="student.e_board_institute2"
                                                                placeholder="Enter Board Or Institute" />

                                                            <small v-if="errors.e_board_institute2"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_board_institute1[0]"></small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card mb-2">
                                            <div class="card-header">
                                                
                                                Back Ground Education Info 3
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_exam_name3">Name of Examination</label>
                                                            <input id="e_exam_name3" type="text" class="form-control"
                                                                v-model="student.e_exam_name3"
                                                                placeholder="Enter name of examination" required />

                                                            <small v-if="errors.e_exam_name3"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_exam_name1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_group3">Group</label>
                                                            <input id="e_group3" type="text" class="form-control"
                                                                v-model="student.e_group3" placeholder="Enter group no"
                                                                required />

                                                            <small v-if="errors.e_group3"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_group1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_roll_no_3">Roll</label>
                                                            <input id="e_roll_no_3" type="number" class="form-control"
                                                                v-model="student.e_roll_no_3"
                                                                placeholder="Enter roll no" />

                                                            <small v-if="errors.e_roll_no_3"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_roll_no_1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_passing_year3">Passing Year</label>
                                                            <select name="e_passing_year3" id="e_passing_year3"
                                                                v-model="student.e_passing_year3" class="form-control">
                                                                <option v-for="(year, index) in years" :key="index"
                                                                    :value="year" v-text="year"></option>
                                                            </select>

                                                            <small v-if="errors.e_passing_year3"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_passing_year1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_ltr_grd_tmarks3">Letter or Grade or Total
                                                                Marks</label>
                                                            <input id="e_ltr_grd_tmarks3" type="text"
                                                                class="form-control" v-model="student.e_ltr_grd_tmarks3"
                                                                placeholder="Enter letter or grade or total marks" />

                                                            <small v-if="errors.e_ltr_grd_tmarks3"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_ltr_grd_tmarks1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_div_cls_cgpa3">Divission Or Class Or
                                                                CGPA</label>
                                                            <input id="e_div_cls_cgpa3" type="text" class="form-control"
                                                                v-model="student.e_div_cls_cgpa3"
                                                                placeholder="Enter Divission Or Class Or CGPA" />

                                                            <small v-if="errors.e_div_cls_cgpa3"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_div_cls_cgpa1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_board_institute3">Board Or Institute</label>
                                                            <input id="e_board_institute3" type="text"
                                                                class="form-control"
                                                                v-model="student.e_board_institute3"
                                                                placeholder="Enter Board Or Institute" />

                                                            <small v-if="errors.e_board_institute3"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_board_institute1[0]"></small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card mb-2">
                                            <div class="card-header">
                                                Back Ground Education Info 4
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_exam_name4">Name of Examination</label>
                                                            <input id="e_exam_name4" type="text" class="form-control"
                                                                v-model="student.e_exam_name4"
                                                                placeholder="Enter name of examination" required />

                                                            <small v-if="errors.e_exam_name4"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_exam_name1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_group4">Group</label>
                                                            <input id="e_group4" type="text" class="form-control"
                                                                v-model="student.e_group4" placeholder="Enter group no"
                                                                required />

                                                            <small v-if="errors.e_group4"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_group1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_roll_no_4">Roll</label>
                                                            <input id="e_roll_no_4" type="number" class="form-control"
                                                                v-model="student.e_roll_no_4"
                                                                placeholder="Enter roll no" />

                                                            <small v-if="errors.e_roll_no_4"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_roll_no_1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_passing_year4">Passing Year</label>
                                                            <select name="e_passing_year4" id="e_passing_year4"
                                                                v-model="student.e_passing_year4" class="form-control">
                                                                <option v-for="(year, index) in years" :key="index"
                                                                    :value="year" v-text="year"></option>
                                                            </select>

                                                            <small v-if="errors.e_passing_year4"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_passing_year1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_ltr_grd_tmarks4">Letter or Grade or Total
                                                                Marks</label>
                                                            <input id="e_ltr_grd_tmarks4" type="text"
                                                                class="form-control" v-model="student.e_ltr_grd_tmarks4"
                                                                placeholder="Enter letter or grade or total marks" />

                                                            <small v-if="errors.e_ltr_grd_tmarks4"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_ltr_grd_tmarks1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_div_cls_cgpa4">Divission Or Class Or
                                                                CGPA</label>
                                                            <input id="e_div_cls_cgpa4" type="text" class="form-control"
                                                                v-model="student.e_div_cls_cgpa4"
                                                                placeholder="Enter Divission Or Class Or CGPA" />

                                                            <small v-if="errors.e_div_cls_cgpa4"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_div_cls_cgpa1[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="e_board_institute4">Board Or Institute</label>
                                                            <input id="e_board_institute4" type="text"
                                                                class="form-control"
                                                                v-model="student.e_board_institute4"
                                                                placeholder="Enter Board Or Institute" />

                                                            <small v-if="errors.e_board_institute4"
                                                                class="text-danger with-errors"
                                                                v-html="errors.e_board_institute1[0]"></small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <ul class="pager wizard twitter-bs-wizard-pager-link text-right">
                                            <button type="button" @click="previewStep(3)" class="btn btn-info">
                                                Previous
                                            </button>

                                            <button type="button" @click="nextStep('education')"
                                                class="btn btn-success">
                                                Next
                                            </button>
                                        </ul>
                                    </div>
                                </div>

                                <!-- {{ --others--}} -->
                                <div class="tab-pane" :class="othersStep ? 'active' : ''">
                                    <div>
                                        <div class="card mb-2">
                                            <div class="card-header">Refereed by</div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="refereed_by">Referred By</label>
                                                            <select name="refereed_by" id="refereed_by"
                                                                v-model="student.refereed_by" class="form-control">
                                                                <option v-for="(
                                    refereedByParent, index
                                  ) in refereedByParents" :key="index" :value="refereedByParent.id"
                                                                    v-text="refereedByParent.name"></option>
                                                                <option value="test">Test</option>
                                                            </select>

                                                            <small v-if="errors.refereed_by"
                                                                class="text-danger with-errors"
                                                                v-html="errors.refereed_by[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12"
                                                        v-show="student.refereed_by == 1">
                                                        <div class="form-group">
                                                            <label for="refe_by_std_type">From</label>
                                                            <select name="refe_by_std_type" id="refe_by_std_type"
                                                                v-model="student.refe_by_std_type" class="form-control">
                                                                <option v-for="(
                                    refeByStdType, index
                                  ) in refeByStdTypes" :key="index" :value="refeByStdType.id"
                                                                    v-text="refeByStdType.name"></option>
                                                            </select>

                                                            <small v-if="errors.refe_by_std_type"
                                                                class="text-danger with-errors"
                                                                v-html="errors.refe_by_std_type[0]"></small>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-12" v-show="
                                                        student.refereed_by != '' &&
                                                        student.refereed_by != 1
                                                    ">
                                                        <div class="form-group">
                                                            <label for="refereed_by_email">
                                                                <span v-if="student.refereed_by == 2">Liaison
                                                                    Officer's Code</span>
                                                                <span v-else-if="student.refereed_by == 3">Student's
                                                                    Reg.Code</span>
                                                                <span v-else>Employee's Email</span>
                                                            </label>
                                                            <input type="text" class="form-control"
                                                                id="refereed_by_email" name="refereed_by_email"
                                                                v-model="student.refereed_by_email" />

                                                            <small v-if="errors.refereed_by_email"
                                                                class="text-danger with-errors"
                                                                v-html="errors.refereed_by_email[0]"></small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <ul class="pager wizard twitter-bs-wizard-pager-link text-right">
                                            <button type="button" @click="previewStep(4)" class="btn btn-info">
                                                Previous
                                            </button>

                                            <button type="button" @click="submitForm()" class="btn btn-success">
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

<script >
export default {
    layout: 'Adm-content',


    computed: {
        years() {
            const year = new Date().getFullYear();
            let data = Array.from({ length: (year + 1) - 2000 }, (value, index) => 2020 + index);
            return data.slice().reverse();
        }
    },
  
    data() {
        return {
            generalStep: true,
            personalStep: false,
            familyStep: false,
            educationStep: false,
            othersStep: false,

            same_as_permanent: false,
            base_url: process.env.url,

            student: {
                general: '',
                department_id: '',
                batch_id: '',
                shift_id: '',
                group_id: '',
                adm_frm_sl: '',
                admission_season: '',
                roll_no: '',
                reg_code: '',

                //personal
                student_name: '',
                blood_group: '',
                email: '',
                phone_no: '',
                religion_id: '',
                gender: '',
                dob: '',
                birth_place: '',
                fg_monthly_income: '',
                nationality: '',
                std_birth_or_nid_no: '',
                marital_status: '',
                permanent_add: '',
                mailing_add: '',
                //family
                f_name: '',
                f_cellno: '',
                f_occu: '',
                father_nid_no: '',
                m_name: '',
                m_cellno: '',
                m_occu: '',
                mother_nid_no: '',
                g_name: '',
                g_cellno: '',
                g_occu: '',
                e_name: '',
                e_cellno: '',
                e_occu: '',
                e_relation: '',
                //education
                
                exam_name1: '',
                roup1: '',
                roll_no_1: '',
                passing_year1: '',
                ltr_grd_tmarks1: '',
                div_cls_cgpa1: '',
                board_institute1: '',
                exam_name2: '',
                group2: '',
                roll_no_2: '',
                passing_year2: '',
                ltr_grd_tmarks2: '',
                div_cls_cgpa2: '',
                board_institute2: '',
                e_exam_name3: '',
                e_group3: '',
                e_roll_no_3: '',
                e_passing_year3: '',
                e_ltr_grd_tmarks3: '',
                e_div_cls_cgpa3: '',
                e_board_institute3: '',
                e_exam_name4: '',
                e_group4: '',
                e_roll_no_4: '',
                e_passing_year4: '',
                e_ltr_grd_tmarks4: '',
                e_div_cls_cgpa4: '',
                e_board_institute4: '',
                                //others
                refereed_by: '',
                refe_by_std_type: '',
                refereed_by_email: '',

            },
            education:{
                exam_name1: 'test',
                group1: 'a',
                roll_no1: '10',
                passing_year1: '2020',
                ltr_grd_tmarks1: '4',
                div_cls_cgpa1: '4',
                board_institute1: 'test',
            },
           

            errors: [],
            loading: false,
            departments: '',
            batches: '',
            shifts: '',
            groups: '',
            bloods: [
                { value: '', text: 'Please select an option', disabled: true },
                { value: 'UN', text: 'UN' },
                { value: 'A+', text: 'A+' },
                { value: 'A-', text: 'A-' },
                { value: 'B+', text: 'B+' },
                { value: 'B-', text: 'B-' },
                { value: 'O+', text: 'O+' },
                { value: 'O-', text: 'O-' },
                { value: 'AB+', text: 'AB+' },
                { value: 'AB-', text: 'AB-' },
            ],

         
            countries: [],
            refereedByParents: [],
            refeByStdTypes: [],
            file_path: '',
            signature_path: '',



        }
    },
      mounted() {
          this.fetchStudentInfo();
        this.fetchDepartmentInfo();
        
        
        

    },
    methods: {
          fetchStudentInfo(){
            this.$axios.$get('/admission/student-edit/'+ this.$route.params.id).then(response => {
                // console.log(response);   
                            
                this.student = response;               
                this.fetchBatch();
                this.fetchShiftGroup();
                
            }).catch((error) => {
                this.$toaster.error("Student Not found");
            });
        },
      

        fetchDepartmentInfo() {

            this.$axios.$get('/admission/department').then(response => {
                this.departments = response;
            }).catch((error) => {
                this.$toaster.error("Department Not found");
            });


        },

        fetchBatch() {
            this.$axios.$get("/admission/batch/" + this.student.department_id).then((response) => {
                this.batches = response.data;
            }).catch((error) => {
                this.$toaster.error("Batch Not found");
            });


        },

        fetchShiftGroup() {

            this.$axios.$get("/admission/shift-group/" + this.student.batch_id).then((response) => {
                console.log('shift', response);
                this.shifts = response;
                this.groups = response;
            }).catch((error) => {
                this.$toaster.error("Batch Not found");
            });

        },

        previewStep(step) {

            if (step == 1) {
                this.generalStep = true;
                this.personalStep = false;
                this.familyStep = false;
                this.educationStep = false;
                this.othersStep = false;
            } else if (step == 2) {
                this.generalStep = false;
                this.personalStep = true;
                this.familyStep = false;
                this.educationStep = false;
                this.othersStep = false;
            } else if (step == 3) {
                this.generalStep = false;
                this.personalStep = false;
                this.familyStep = true;
                this.educationStep = false;
                this.othersStep = false;
            } else {
                this.generalStep = false;
                this.personalStep = false;
                this.familyStep = false;
                this.educationStep = true;
                this.othersStep = false;
            }

        },

        nextStep(stepName) {

            if (stepName == 'general') {
                this.generalInfo();
            }

            if (stepName == 'personal') {
                this.personalInfo();
            }

            if (stepName == 'family') {
                this.familyInfo();
            }

            if (stepName == 'education') {
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
            this.othersStep = false;            

        },

        personalInfo() {

            if (!this.student.student_name) {
                this.$toaster.error("Please enter student name");
                return false;
            }

            if (!this.student.blood_group) {
                this.$toaster.error("Please select blood group");
                return false;
            }

            if (!this.student.email) {
                this.$toaster.error("Please enter email");
                return false;
            }

            if (!this.student.phone_no) {
                this.$toaster.error("Please enter student mobile number");
                return false;
            }

            if (!this.student.religion_id) {
                this.$toaster.error("Please select religion");
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

            if (!this.student.birth_place) {
                this.$toaster.error("Please enter birth place");
                return false;
            }

            if (!this.student.nationality) {
                this.$toaster.error("Please select nationality");
                return false;
            }

            if (!this.student.std_birth_or_nid_no) {
                this.$toaster.error("Please birth or NID or passport No");
                return false;
            }

            if (!this.student.marital_status) {
                this.$toaster.error("Please select marital status");
                return false;
            }

            // if (document.getElementById('file_input').files[0] == undefined) {
            //     this.$toaster.error("Please select image");
            //     return false;
            // }

            // if (document.getElementById('signature').files[0] == undefined) {
            //     this.$toaster.error("Please select signature");
            //     return false;
            // }

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
            this.othersStep = false;

        },

        familyInfo() {

            if (!this.student.f_name) {
                this.$toaster.error("Please enter father name");
                return false;
            }

            if (!this.student.f_cellno) {
                this.$toaster.error("Please enter father cell");
                return false;
            }

            if (!this.student.father_nid_no) {
                this.$toaster.error("Please enter father nid");
                return false;
            }

            if (!this.student.m_name) {
                this.$toaster.error("Please enter mother name");
                return false;
            }

            if (!this.student.mother_nid_no) {
                this.$toaster.error("Please enter mother nid");
                return false;
            }

            if (!this.student.mother_nid_no) {
                this.$toaster.error("Please enter mother nid");
                return false;
            }

            if (!this.student.e_name) {
                this.$toaster.error("Please enter Emergency Contact Person name");
                return false;
            }

            if (!this.student.e_cellno) {
                this.$toaster.error("Please enter Emergency Contact Person cell");
                return false;
            }

            this.generalStep = false;
            this.personalStep = false;
            this.familyStep = false;
            this.educationStep = true;
            this.othersStep = false;

        },

        educationInfo() {

            // if (!this.student.e_exam_name1) {
            //     this.$toaster.error("Please enter name of the examination (Back Ground Education Info 1)");
            //     return false;
            // }

            // if (!this.student.e_group1) {
            //     this.$toaster.error("Please enter group (Back Ground Education Info 1)");
            //     return false;
            // }

            // if (!this.student.e_roll_no_1) {
            //     this.$toaster.error("Please enter roll (Back Ground Education Info 1)");
            //     return false;
            // }

            // if (!this.student.e_passing_year1) {
            //     this.$toaster.error("Please enter passing year (Back Ground Education Info 1)");
            //     return false;
            // }

            // if (!this.student.e_ltr_grd_tmarks1) {
            //     this.$toaster.error("Please enter letter or grade or total Marks (Back Ground Education Info 1)");
            //     return false;
            // }

            // if (!this.student.e_div_cls_cgpa1) {
            //     this.$toaster.error("Please enter divission or class or CGPA (Back Ground Education Info 1)");
            //     return false;
            // }

            // if (!this.student.e_board_institute1) {
            //     this.$toaster.error("Please enter board / institute (Back Ground Education Info 1)");
            //     return false;
            // }

            // if (!this.student.e_exam_name2) {
            //     this.$toaster.error("Please enter name of the examination (Back Ground Education Info 2)");
            //     return false;
            // }

            // if (!this.student.e_group2) {
            //     this.$toaster.error("Please enter group (Back Ground Education Info 2)");
            //     return false;
            // }

            // if (!this.student.e_roll_no_2) {
            //     this.$toaster.error("Please enter roll (Back Ground Education Info 2)");
            //     return false;
            // }

            // if (!this.student.e_passing_year2) {
            //     this.$toaster.error("Please enter passing year (Back Ground Education Info 2)");
            //     return false;
            // }

            // if (!this.student.e_ltr_grd_tmarks2) {
            //     this.$toaster.error("Please enter letter or grade or total Marks (Back Ground Education Info 2)");
            //     return false;
            // }

            // if (!this.student.e_div_cls_cgpa2) {
            //     this.$toaster.error("Please enter divission or class or CGPA (Back Ground Education Info 2)");
            //     return false;
            // }

            // if (!this.student.e_board_institute2) {
            //     this.$toaster.error("Please enter board / institute (Back Ground Education Info 2)");
            //     return false;
            // }

            // this.fetchRefereedByParent();

            this.generalStep = false;
            this.personalStep = false;
            this.familyStep = false;
            this.educationStep = false;
            this.othersStep = true;


        },

        sameAsPermanent() {
            if (!this.same_as_permanent) {
                this.student.mailing_add = this.student.permanent_add
            } else {
                this.student.mailing_add = ''
            }
        },


        submitForm() {

            let formData = new FormData();

            for (const property in this.student) {
                formData.append(`${property}`, `${this.student[property]}`);
            }

            formData.append("file", document.getElementById('file_input').files[0]);
            formData.append("signature", document.getElementById('signature').files[0]);
            console.log(formData);

            this.$axios.$post('/admission/student-update/'+this.$route.params.id, formData,this.education, {

                headers: {
                    "Content-Type": "multipart/form-data",
                },

            }).then((response) => {

                this.$toaster.success(response.message);
                console.log(response);




            }).catch((error) => {

                if (error.response.status == 422) {
                    this.$toaster.error('Validation error');
                    return false;
                }

                if (error.response.status == 400) {
                    this.$toaster.error(error.response.data.message);
                    return false;
                }

                if (error.response.status == 404) {

                    this.$toaster.error(error.response.data.error);
                    return false;

                }

                this.$toaster.error("Something went wrong");

            });

        },

        fileValidationCheck() {

            let FileSize = document.getElementById('file_input').files[0].size / 1024 / 1024; // in MiB // 1MB

            const file = document.getElementById('file_input').files[0];
            this.file_path = URL.createObjectURL(file);

            if (FileSize > 1) {
                alert('File max size must be 1024KB');
                $("#file_input").val('');
                this.file_path = '';
                return false;
            }
        },

        fileSignatureValidationCheck() {

            let FileSize = document.getElementById('signature').files[0].size / 500 / 500; // in MiB // 1MB

            const file = document.getElementById('signature').files[0];
            this.signature_path = URL.createObjectURL(file);

            if (FileSize > 1) {
                alert('File max size must be 500KB');
                $("#signature").val('');
                this.signature_path = '';
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
                
                
                .bootstrap-select:not([class*=col-]):not([class*=form-control]):not(.input-group-btn) {
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
                    background-color: #423A3D;
                }
                
                .bg-1 {
                    background-color: #F45E55;
                    border-radius: 100%;
                    color: #F45E55;
                }
                
                .bg-2 {
                    background-color: #F8BB45;
                    border-radius: 100%;
                    color: #F8BB45;
                }
                
                .bg-3 {
                    background-color: #43CB47;
                    border-radius: 100%;
                    color: #43CB47;
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
