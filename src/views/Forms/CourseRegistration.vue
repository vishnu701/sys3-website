<template>
  <div class="content">
    <!-- Form Section -->
    <section id="form-section" class="section" style="padding-top: 160px;">
      <div class="container">
        <div class="form-wrapper">
          <div class="form-container">
            <div class="form-header">
              <div class="form-title-row">
                <div class="section-header center">
                  <span class="overline">Course Registration</span>
                  <h2>System3 AI X TIS Course</h2>
                  <div class="section-divider"></div>
                  <p class="section-description">July 2025 (Indian Cohort) - High School Program</p>
                </div>
                <button id="prefill-form-btn" class="prefill-button" type="button" @click="prefillForm">
                  {{ prefillButtonText }}
                </button>
              </div>
              <div class="welcome-message">
                <p class="large-text">🚀 <strong>Welcome to System3's AI & Data Science Course!</strong> 🚀</p>
                <p class="large-text">Thank you for your interest in our <strong>live online program</strong> designed for high school students. This course will introduce you to <strong>Python, data science, and machine learning</strong> through interactive lectures, hands-on projects, and teamwork.</p>
              </div>
              <div class="form-important-info">
                <div class="info-header">
                  <div class="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                  </div>
                  <p class="info-title"><strong>Important Information</strong></p>
                </div>
                <div class="info-content">
                  <ul>
                    <li>Please fill out this form carefully and accurately</li>
                    <li>The student <strong>email ID provided</strong> will be used for all future communications and Zoom attendance</li>
                    <li>Parental contact details are required for registration confirmation and ongoing communications</li>
                    <li>Any special learning requirements can be mentioned in the designated section</li>
                  </ul>
                  <p><strong>✅ Next Steps:</strong> After submission, you will receive a confirmation email with details about registration fee payment and course logistics</p>
                  <p>Questions? Contact the System3 team at <a href="mailto:info@system3.company">info@system3.company</a> or <a href="mailto:anshika@system3.company">anshika@system3.company</a> 🚀</p>
                </div>
              </div>
            </div>

            <form id="course-registration-form" @submit.prevent="handleSubmit" v-if="!showSuccess">
              <!-- Student Information Section -->
              <div class="form-section">
                <h2 class="form-section-title">Student Information</h2>
                
                <div class="form-group">
                  <label for="name" class="required-field">Full Name</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="name" 
                    v-model="formData.name" 
                    required 
                    placeholder="Student's full name"
                  >
                </div>
                
                <div class="form-group">
                  <label for="pronouns" class="required-field">Pronouns</label>
                  <div class="radio-group">
                    <div class="radio-option">
                      <input 
                        type="radio" 
                        id="pronouns-he" 
                        v-model="formData.pronouns" 
                        value="He/Him" 
                        required
                      >
                      <label for="pronouns-he">He/Him</label>
                    </div>
                    <div class="radio-option">
                      <input 
                        type="radio" 
                        id="pronouns-she" 
                        v-model="formData.pronouns" 
                        value="She/Her"
                      >
                      <label for="pronouns-she">She/Her</label>
                    </div>
                    <div class="radio-option">
                      <input 
                        type="radio" 
                        id="pronouns-they" 
                        v-model="formData.pronouns" 
                        value="They/Them"
                      >
                      <label for="pronouns-they">They/Them</label>
                    </div>
                    <div class="radio-option">
                      <input 
                        type="radio" 
                        id="pronouns-prefer-not" 
                        v-model="formData.pronouns" 
                        value="Prefer not to say"
                      >
                      <label for="pronouns-prefer-not">Prefer not to say</label>
                    </div>
                    <div class="radio-option">
                      <input 
                        type="radio" 
                        id="pronouns-other" 
                        v-model="formData.pronouns" 
                        value="Other (please specify)"
                      >
                      <label for="pronouns-other">Other (please specify)</label>
                    </div>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="email" class="required-field">Email ID – <em>This will be used for all further communications and Zoom attendance accounts.</em></label>
                  <input 
                    type="email" 
                    class="form-control" 
                    id="email" 
                    v-model="formData.email" 
                    required 
                    placeholder="Student's email address"
                  >
                </div>
                
                <div class="form-group">
                  <label for="phone" class="required-field">Phone Number</label>
                  <input 
                    type="tel" 
                    class="form-control" 
                    id="phone" 
                    v-model="formData.phone" 
                    required 
                    placeholder="Student's phone number with country code"
                  >
                </div>
                
                <div class="form-group">
                  <label for="age" class="required-field">Age</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="age" 
                    v-model="formData.age" 
                    required 
                    placeholder="Your age"
                  >
                </div>
                
                <div class="form-group">
                  <label for="school" class="required-field">School Name</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="school" 
                    v-model="formData.school" 
                    required 
                    placeholder="Current school name"
                  >
                </div>
                
                <div class="form-group">
                  <label for="location" class="required-field">Location/City</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="location" 
                    v-model="formData.location" 
                    required 
                    placeholder="Your current city"
                  >
                </div>
              </div>
              
              <!-- Parent/Guardian Information -->
              <div class="form-section">
                <h2 class="form-section-title">Parent/Guardian Information</h2>
                
                <div class="form-group">
                  <label for="father-name" class="required-field">Father's Name</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="father-name" 
                    v-model="formData.fatherName" 
                    required 
                    placeholder="Father's full name"
                  >
                </div>
                
                <div class="form-group">
                  <label for="father-email" class="required-field">Father's Email ID</label>
                  <input 
                    type="email" 
                    class="form-control" 
                    id="father-email" 
                    v-model="formData.fatherEmail" 
                    required 
                    placeholder="Father's email address"
                  >
                </div>
                
                <div class="form-group">
                  <label for="father-phone" class="required-field">Father's Phone Number</label>
                  <input 
                    type="tel" 
                    class="form-control" 
                    id="father-phone" 
                    v-model="formData.fatherPhone" 
                    required 
                    placeholder="Father's phone number with country code"
                  >
                </div>
                
                <div class="form-group">
                  <label for="mother-name" class="required-field">Mother's Name</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="mother-name" 
                    v-model="formData.motherName" 
                    required 
                    placeholder="Mother's full name"
                  >
                </div>
                
                <div class="form-group">
                  <label for="mother-phone" class="required-field">Mother's Phone Number</label>
                  <input 
                    type="tel" 
                    class="form-control" 
                    id="mother-phone" 
                    v-model="formData.motherPhone" 
                    required 
                    placeholder="Mother's phone number with country code"
                  >
                </div>
                
                <div class="form-group">
                  <label for="mother-email" class="required-field">Mother's Email ID</label>
                  <input 
                    type="email" 
                    class="form-control" 
                    id="mother-email" 
                    v-model="formData.motherEmail" 
                    required 
                    placeholder="Mother's email address"
                  >
                </div>
              </div>
              
              <!-- Additional Student Information -->
              <div class="form-section">
                <h2 class="form-section-title">Additional Student Information</h2>
                <p class="form-section-desc"><em>(This will not affect your admission. It helps us tailor the learning experience for all students.)</em></p>
                
                <div class="form-group">
                  <label for="coding-experience" class="required-field">Prior Coding Experience</label>
                  <div class="radio-group">
                    <div class="radio-option">
                      <input 
                        type="radio" 
                        id="coding-none" 
                        v-model="formData.codingExperience" 
                        value="No, I'm a complete beginner 🚀" 
                        required
                      >
                      <label for="coding-none">No, I'm a complete beginner 🚀</label>
                    </div>
                    <div class="radio-option">
                      <input 
                        type="radio" 
                        id="coding-basic" 
                        v-model="formData.codingExperience" 
                        value="Yes, I've done some basic coding (Scratch, HTML, Python, etc.)"
                      >
                      <label for="coding-basic">Yes, I've done some basic coding (Scratch, HTML, Python, etc.)</label>
                    </div>
                    <div class="radio-option">
                      <input 
                        type="radio" 
                        id="coding-comfortable" 
                        v-model="formData.codingExperience" 
                        value="Yes, I'm comfortable with Python and basic data science"
                      >
                      <label for="coding-comfortable">Yes, I'm comfortable with Python and basic data science</label>
                    </div>
                    <div class="radio-option">
                      <input 
                        type="radio" 
                        id="coding-ml" 
                        v-model="formData.codingExperience" 
                        value="Yes, I have experience with machine learning"
                      >
                      <label for="coding-ml">Yes, I have experience with machine learning</label>
                    </div>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="reason" class="required-field">Reason for Joining the Course</label>
                  <p class="field-description">💡 <em>What interests you about this course? (e.g., Learning AI, Improving Coding Skills, Future Career Goals, etc.)</em></p>
                  <textarea 
                    class="form-control" 
                    id="reason" 
                    v-model="formData.reason" 
                    rows="4" 
                    required 
                    placeholder="Share what interests you about this course..."
                  ></textarea>
                </div>
                
                <div class="form-group">
                  <label for="special-requirements">Any Special Learning Requirements?</label>
                  <p class="field-description">💡 <em>Let us know if you need any accommodations to support your learning experience.</em></p>
                  <textarea 
                    class="form-control" 
                    id="special-requirements" 
                    v-model="formData.specialRequirements" 
                    rows="4" 
                    placeholder="Any special requirements or accommodations..."
                  ></textarea>
                </div>
              </div>
              
              <div class="form-submit">
                <button 
                  type="submit" 
                  class="submit-btn" 
                  :disabled="submitting"
                >
                  {{ submitting ? 'Submitting...' : 'Submit Registration' }}
                </button>
              </div>
              
              <div class="form-note">
                <p>* Required fields</p>
              </div>
            </form>
            
            <div id="success-message" class="success-message" :class="{ active: showSuccess }">
              <div class="success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Registration Submitted Successfully!</h3>
              <p>Thank you for registering for the System3 AI X TIS Course. Your information has been received.</p>
              <p>You will receive a confirmation email with further details about the registration fee and next steps.</p>
              <div class="success-actions">
                <router-link to="/" class="success-btn">Return to Home</router-link>
                <button @click="resetForm" class="success-btn">Submit Another Response</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

// Form data state
const formData = reactive({
  // Student information
  name: '',
  pronouns: '',
  email: '',
  phone: '',
  age: '',
  school: '',
  location: '',
  
  // Parent information
  fatherName: '',
  fatherEmail: '',
  fatherPhone: '',
  motherName: '',
  motherEmail: '',
  motherPhone: '',
  
  // Additional information
  codingExperience: '',
  reason: '',
  specialRequirements: ''
});

// Form state
const submitting = ref(false);
const showSuccess = ref(false);
const prefillButtonText = ref('Prefill with Sample Data');

// Sample data for form prefilling
const sampleData = {
  name: 'Rahul Sharma',
  pronouns: 'He/Him',
  email: 'rahul.sharma@example.com',
  phone: '+91 98765 43210',
  age: '16',
  school: 'Delhi Public School',
  location: 'New Delhi',
  
  // Parent information
  fatherName: 'Rajesh Sharma',
  fatherEmail: 'rajesh.sharma@example.com',
  fatherPhone: '+91 98765 12345',
  motherName: 'Priya Sharma',
  motherEmail: 'priya.sharma@example.com',
  motherPhone: '+91 98765 67890',
  
  // Additional information
  codingExperience: 'No, I\'m a complete beginner 🚀',
  reason: 'I am very interested in learning AI because I want to create projects that can help solve real-world problems. I also think AI skills will be valuable for my future career.',
  specialRequirements: 'No special requirements needed.'
};

// Google Form field IDs (entry.xxxx)
const googleFormFields = {
  name: 'entry.1667895830',
  pronouns: 'entry.652252157',
  email: 'entry.66006725',
  phone: 'entry.1481181351',
  age: 'entry.1329145952',
  school: 'entry.1487598417',
  location: 'entry.995867649',
  fatherName: 'entry.1197672615',
  fatherEmail: 'entry.2005001355',
  fatherPhone: 'entry.795229030',
  motherName: 'entry.1145455440',
  motherPhone: 'entry.2045055351',
  motherEmail: 'entry.691263968',
  codingExperience: 'entry.89463690',
  reason: 'entry.1711540471',
  specialRequirements: 'entry.1197991682'
};

// Google Form URL
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfRoX1TA6OWNRa14WvcskK6P-Jhvi08y8kLrHOKJDHw8rJ3CQ/formResponse';

// Handle form submission
const handleSubmit = async () => {
  submitting.value = true;
  
  try {
    // Construct the form data for submission
    const formDataToSubmit = new FormData();
    
    // Map our form fields to Google Form fields
    for (const [key, value] of Object.entries(formData)) {
      const googleFieldName = googleFormFields[key];
      if (googleFieldName && value) {
        formDataToSubmit.append(googleFieldName, value);
      }
    }
    
    // URL-encode the form data
    const urlEncodedData = new URLSearchParams(formDataToSubmit).toString();
    
    // Log submission data (for debugging)
    console.log('Submitting form data:', Object.fromEntries(formDataToSubmit));
    
    // Store in localStorage for reference
    localStorage.setItem('lastFormSubmission', JSON.stringify({
      timestamp: new Date().toISOString(),
      data: { ...formData }
    }));
    
    // Submit to Google Form
    // Note: Using fetch with 'no-cors' mode can't actually tell us if the submission was successful
    // But we show a success message anyway
    await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      mode: 'no-cors', // Important for cross-domain requests to Google
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncodedData
    });
    
    // Show success message
    showSuccess.value = true;
    
  } catch (error) {
    console.error('Error submitting form:', error);
    // Even on error, we show success since we can't actually detect errors with no-cors
    showSuccess.value = true;
  } finally {
    submitting.value = false;
  }
};

// Function to fill form with sample data
const prefillForm = () => {
  // Fill all form fields with sample data
  for (const key in sampleData) {
    if (formData.hasOwnProperty(key)) {
      formData[key] = sampleData[key];
    }
  }
  
  // Show success state for the button
  prefillButtonText.value = 'Form Prefilled ✓';
  
  // Reset button after 2 seconds
  setTimeout(() => {
    prefillButtonText.value = 'Prefill with Sample Data';
  }, 2000);
};

// Reset the form to submit another response
const resetForm = () => {
  // Reset all form fields
  for (const key in formData) {
    formData[key] = '';
  }
  showSuccess.value = false;
};
</script>

<style scoped>
/* Base styles for the minimal premium design */
.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
}

.section {
  padding: 120px 0;
  position: relative;
  overflow: hidden;
}


.gradient-text {
  background: linear-gradient(135deg, #5842FF, #6585FE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

/* Section Headers */
.section-header {
  margin-bottom: 40px;
}

.section-header.center {
  text-align: center;
}

.overline {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #5842FF;
  margin-bottom: 20px;
  display: inline-block;
}

h2 {
  font-size: 48px;
  font-weight: 400;
  margin: 0 0 24px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #545454;
}

.section-divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #5842FF, #6585FE);
  margin: 24px auto 0;
  border-radius: 2px;
}

.section-description {
  font-size: 19px;
  line-height: 1.8;
  max-width: 700px;
  margin: 20px auto 0;
  color: #545454;
  font-weight: 300;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

.large-text {
  font-size: 19px;
  line-height: 1.8;
  margin-bottom: 24px;
  font-weight: 300;
  color: #545454;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

/* Form Container */
.form-container {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 24px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);
  padding: 40px;
  border: 1px solid rgba(88, 66, 255, 0.05);
}

.form-header {
  margin-bottom: 40px;
  text-align: center;
}

.form-title-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 32px;
}

.welcome-message {
  text-align: center;
  margin-bottom: 32px;
}

/* Form Sections */
.form-section {
  margin-bottom: 40px;
  padding: 30px;
  background: rgba(245, 247, 250, 0.3);
  border-radius: 16px;
  border: 1px solid rgba(88, 66, 255, 0.08);
}

.form-section-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #5842FF;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(88, 66, 255, 0.1);
}

.form-section-desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
  font-style: italic;
}

/* Form Groups */
.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #545454;
  font-size: 15px;
}

.required-field::after {
  content: ' *';
  color: #e74c3c;
}

.form-control {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: white;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.03);
}

.form-control:focus {
  outline: none;
  border-color: #5842FF;
  box-shadow: 0 0 0 3px rgba(88, 66, 255, 0.15), inset 0 2px 4px rgba(0, 0, 0, 0.02);
  transform: translateY(-1px);
}

textarea.form-control {
  min-height: 120px;
  resize: vertical;
  border-radius: 16px;
}

/* Radio Groups */
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.radio-option:hover {
  background: rgba(88, 66, 255, 0.05);
  border-color: rgba(88, 66, 255, 0.2);
}

.radio-option:has(input[type="radio"]:checked) {
  background: rgba(88, 66, 255, 0.1);
  border-color: #5842FF;
}

.radio-option input[type="radio"] {
  margin: 0;
  cursor: pointer;
}

.radio-option label {
  margin: 0;
  cursor: pointer;
  font-weight: 400;
}

/* Field Description */
.field-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
  font-style: italic;
}

/* Important Info */
.form-important-info {
  background: rgba(88, 66, 255, 0.05);
  border: 1px solid rgba(88, 66, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  margin: 24px 0;
}

.info-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.info-icon {
  color: #5842FF;
  flex-shrink: 0;
}

.info-title {
  font-size: 16px;
  font-weight: 600;
  color: #5842FF;
  margin: 0;
}

.info-content ul {
  margin: 0 0 16px;
  padding-left: 20px;
}

.info-content li {
  margin-bottom: 8px;
  color: #545454;
}

.info-content p {
  margin: 12px 0;
  color: #545454;
}

.info-content a {
  color: #5842FF;
  text-decoration: none;
}

.info-content a:hover {
  text-decoration: underline;
}

/* Submit Button */
.form-submit {
  text-align: center;
  margin: 40px 0 20px;
}

.submit-btn {
  background: #5842FF;
  color: white;
  border: none;
  padding: 16px 40px;
  border-radius: 24px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(88, 66, 255, 0.2);
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(88, 66, 255, 0.35);
  background: linear-gradient(135deg, #5842FF, #6585FE);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Form Note */
.form-note {
  text-align: center;
  font-size: 14px;
  color: #666;
  font-style: italic;
}

/* Success Message */
.success-message {
  display: none;
  text-align: center;
  padding: 40px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);
}

.success-message.active {
  display: block;
}

.success-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  background: rgba(34, 197, 94, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #22c55e;
}

.success-message h3 {
  font-size: 28px;
  margin-bottom: 16px;
  color: #545454;
  font-weight: 600;
}

.success-message p {
  font-size: 16px;
  margin-bottom: 16px;
  color: #545454;
  line-height: 1.6;
}

.success-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 32px;
}

.success-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 24px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.success-btn:first-child {
  background: #5842FF;
  color: white;
  box-shadow: 0 4px 12px rgba(88, 66, 255, 0.2);
}

.success-btn:first-child:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(88, 66, 255, 0.35);
}

.success-btn:last-child {
  background: transparent;
  color: #5842FF;
  border: 1px solid #5842FF;
}

.success-btn:last-child:hover {
  background: rgba(88, 66, 255, 0.1);
  transform: translateY(-3px);
}

/* Prefill Button */
.prefill-button {
  background: rgba(88, 66, 255, 0.1);
  border: 1px solid rgba(88, 66, 255, 0.3);
  color: #5842FF;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  white-space: nowrap;
}

.prefill-button:hover {
  background: rgba(88, 66, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 3px 8px rgba(88, 66, 255, 0.2);
}

/* Responsive Styles */
@media (max-width: 768px) {
  h2 {
    font-size: 32px;
  }
  
  .section {
    padding: 80px 0;
  }
  
  .form-container {
    padding: 24px;
  }
  
  .form-section {
    padding: 20px;
  }
  
  .form-title-row {
    flex-direction: column;
    gap: 16px;
  }
  
  .success-actions {
    flex-direction: column;
  }
}

@media (max-width: 576px) {
  h2 {
    font-size: 28px;
  }
  
  .section {
    padding: 60px 0;
  }
  
  .form-container {
    padding: 20px;
  }
  
  .submit-btn {
    width: 100%;
  }
}
</style>