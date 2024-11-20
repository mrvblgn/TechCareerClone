import React from 'react'
import './community.css'
import communityImage from '../../images/Group.png';
import communityImage2 from '../../images/Group2.png';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Community() {
  return (
    <section class="communityContainer">
        <img src={communityImage} alt="Community" className='img1' />

        <div className='communityContentContainer'>
            <h1 className='communityTitle'>Komünite</h1>
            <p className='communityText'>Teknoloji Komünitesi ile hayalindeki işi bulabilir, kendini geliştirecek eğitimlere katılabilir ve teknoloji uzmanlarıyla tanışabilirsin!</p>

            <Stack spacing={2} direction="row" sx={{marginTop: "10px"}}>
                <Button 
                variant="contained" 
                sx={{
                    backgroundColor: "#00B666", 
                    color: "#FFFFFF", 
                    textTransform: "none",
                    width: "192px", 
                    height: "48px" 
                }} 
                onClick={() => window.open('https://www.techcareer.net/community', '_blank')}
                >
                Keşfet
                </Button>
            </Stack>
        </div>

        <img src={communityImage2} alt="Community" className='img2' />
    </section>
  )
}

export default Community