import React from 'react'
import styled from 'styled-components'


const Terms = () => {
    return (
        <TermsContainer>
            <TermsHeader>Terms and Conditions</TermsHeader>
            <h3>Introduction</h3>
            <br/>
<p>
These Website Standard Terms and Conditions written on this 
webpage shall manage your use of our website, Blu Lago 
accessible at www.blulagofishing.co.uk.</p>
<br/>
<p>These Terms will be applied fully and affect 
to your use of this Website. By using this Website, 
you agreed to accept all terms and conditions written in here. 
You must not use this Website if you disagree with any of these 
Website Standard Terms and Conditions.</p>
<br/>
<p>Minors or people below 18 years old are not allowed to use 
this Website.</p>
<br/>
<h3>Intellectual Property Rights</h3>
<br/>
<p>Other than the content you own, under these Terms, 
    blulago and/or its licensors own all the intellectual 
    property rights and materials contained in this Website.</p>
    <br/>
<p>You are granted limited license only for purposes 
of viewing the material contained on this Website.
Restrictions</p>
<br/>
<p>You are specifically restricted from all of the following:</p>
<br/>
<ul>
    <StyledList>publishing any Website material in any other media;</StyledList>
    <StyledList>selling, sublicensing and/or otherwise commercializing
         any Website material;</StyledList>
   <StyledList> publicly performing and/or showing any Website material;</StyledList>
   <StyledList> using this Website in any way that is or may be damaging to this Website;</StyledList>
   <StyledList> using this Website in any way that impacts user access
        to this Website;</StyledList>
    <StyledList>using this Website contrary to applicable laws and 
        regulations, or in any way may cause harm to the Website, 
        or to any person or business entity;</StyledList>
    <StyledList>engaging in any data mining, data harvesting, 
        data extracting or any other similar activity in 
        relation to this Website;</StyledList>
    <StyledList>using this Website to engage in any advertising or 
        marketing.</StyledList>
    </ul>
    <br/>
<p>Certain areas of this Website are restricted from being access by you and blulago may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.
Your Content</p>
<br/>
<p>In these Website Standard Terms and Conditions, 
    "Your Content" shall mean any audio, video text,
     images or other material you choose to display on 
     this Website. By displaying Your Content, you grant
      blulago a non-exclusive, worldwide irrevocable, sub
       licensable license to use, reproduce, adapt, publish, 
       translate and distribute it in any and all media.</p>
<br/>
<p>Your Content must be your own and must not be invading any third-party’s rights. blulago reserves the right to remove any of Your Content from this Website at any time without notice.
Your Privacy</p>
<br/>
<h3>Refunds</h3>
<p>Deposits are non refundable. A transfer to another party is possible,
    the fishery management must be informed and agree to this.
</p>
<br/>
<h3>Please read Privacy Policy.</h3>
<p>No warranties</p>
<br/>
<p>This Website is provided "as is," with all faults, 
and blulago express no representations or warranties,
 of any kind related to this Website or the materials 
 contained on this Website. Also, nothing contained on 
 this Website shall be interpreted as advising you.</p>
 <br/>
<h3>Limitation of liability</h3>

<p>In no event shall blulago, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  blulago, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
Indemnification</p>
<br/>
<p>You hereby indemnify to the fullest extent blulago from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.
Severability</p>
<br/>
<p>If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
Variation of Terms</p>
<br/>
<p>blulago is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
Assignment</p>
<br/>
<p>The blulago is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
Entire Agreement</p>
<br/>
<p>These Terms constitute the entire agreement between blulago and you in relation to your use of this Website, and supersede all prior agreements and understandings.
Governing Law & Jurisdiction</p>
<br/>
<p>These Terms will be governed by and interpreted in accordance with the laws of the State of gb, and you submit to the non-exclusive jurisdiction of the state and federal courts located in gb for the resolution of any disputes</p>
        </TermsContainer>
    )
}

const TermsContainer = styled.div`
margin: 1rem 1rem 1rem 3rem;
h3{
    color: #595959
}
`

const StyledList = styled.li`
list-style-position: inside;
list-style-type: square;
`

const TermsHeader = styled.h2`
color: #595959;
text-align: center;
`

export default Terms
