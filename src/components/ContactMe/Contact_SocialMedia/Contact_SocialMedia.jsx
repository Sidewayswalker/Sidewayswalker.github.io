import React from 'react';
import './Contact_SocialMedia.css';

function Contact_SocialMedia() {







  return (
    <div className='Contract_SocialMedia'>
      <div className='Contract_SocialMedia_Box'>
        <h2 className='Contract_SocialMedia_Text'>
          Best ways to connect
        </h2>


        <div className='SocialMedia_Icons'>
        <img 
          className='Github_Icon' 
          onClick={() => window.open('https://github.com/Sidewayswalker/')}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAkpJREFUaEPtmVlOA0EMRJOTAScDTgacDDAaS43HdpV7mSEo/CAlvdRz2b3lernxv+uN67/cAc52cKYDjxvMcwOln71vn31s/19mgc8AEJEiWsVWtL1+Nx6CGQGQidtoV4Tbtt0gPQAjEUeQZZAqwMyoRzAliArAEeIVioZgAY4UrxCycj2hnGMAzhBPO4EAIvFisURICxoFKvpe9wcZLxorTScE8BnMLNbq5NLEA22/lzZ2n7DC5Pu3YL5QZwaQpU7Uz+68np6sTRSw0IUMIBpMRCHnelMqm9O6/jNHJAQVrjtYr+qmXwbgrkp/CSCrAWEsAWSRoDeZDkekiLND4c55z4Gz0kdXqmglku+HAajdsSPybZfMhd38VQdWpo9CZBlAAWQROAIgK+ZhgFXLZ5tCaDX6lTVeCp3tAFpEhgCOKOJ/DTBcA+5aPLhs2u6lTdSrAVREK9MIpc9uFYzOQlkUVrmAAkfvxNIQnUmkzcw9gRHvnp6zi0l7JtHbFbpVVcuh8sbkBoy90LR5H10f2XfP9u5beY50tVaulC1ElGJMgTPpaZ3sulJ6tdAK9AqdqQs231uIrkt9dD7X85AI0XTQGoEPUVuf7MxPR5+9nNucZ9IEFTNaprU/dJR9XbAQcGBAwABQc7AAosdbffSFTvXax6yIAwFQ4tkUakWgrZ4NSOm8k7nJTmgvHNFPSux4HoC4Zx1FtTT0wua50QtAp4wlYifMIqE/0j0w7/nbQNJH2pcjvgIA2ryywQwHVuqDY98BYIgWN7h5B74AeFmTMe34xmMAAAAASUVORK5CYII="
        />
        <img 
          className='Linkedin_Icon' 
          onClick={() => window.open('https://www.linkedin.com/in/steven-karl/')} 
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAV1JREFUaEPtWVsOAiEM7J5MPZl6MvVkupPQZIMtC2tDIZYffjbQ6UwfWxaafC2T208BwJvBYGBkBs5EdCUi7J7rSUT31Q7sX6skoccAxrPBMP7SCuDt6fZaZ5cYCADGDIrOPsIAAuqWjMOOQO+xTABsjWeje4EwAaAx1iNeAgAkg1ycF5SpJAQQ2zhAlUbB67FMJNTDUO2OAADPQP8vwUXbWgCJ5euU+ipuzPgsSJCbxb16YsKAFMR5HEgXIU4AnAugJJO9ZOAKACDFdjhDUgLhCqAl+LWiOAyAPTa0/xB3ALk8pL4KTGkycgWgFTzJqJZvi3MhSYtHs5Dm1ZrzOH5cGZgegBaY0zAQANYu2DUGgoFgICXjmqyhdaPSjLXmvCHqwDAxIE2JeYrNnpKGsNqUu+Y8UwZa2mLrb03SqLVRLef9H4DpHzimf2Jq0afbt/HM6ub6dHEwEAz86IEPNMOKMSsOYKkAAAAASUVORK5CYII="
        />
        <img 
          className='Instagram_Icon' 
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAm5JREFUaEPtWTlOBDEQrH0DDyEmAmJ+gAh4ABkJEYcIyEh4AxK/ADISvsF+gBxoZEsty+2u9s7MMmJGWmkPH13V5T68K8z8Wc3cfiwAtu3BxQNz9cABAHntJwDyvve5SRNfftaUV+iJSugawFVoh/hgAST7UA8LQBgWwzdhmjJIDaKAMABqrGdXv/a4XRmZCREp1sg59NZnAHwV1FHMROlO40uyhCgBYT4egHJBl5FOw/U08cQzKyUPgGZ/DOZ3AJwCOALwDkD2+EyHWAcLk7gWAM2E68pO5s8APKi59wDO02dNXhcALZ9e9vPBtOL7HYALBeANwF76LDLK8839Wx7oBSDzrKhSGnIM4FEBuARwWwFgKqAFgHKh2jyS5DSQEwC7AD4APAFYpzUpCQ8FIGJ8xuzJsoxGVVuHAGAlOjEwaz/XTmUZ0gIxGYAy0bVyRQ2sReIkAEqDPFmIfNhENSgAi6XeRKdDpBVhJgcQKTMY45gxzaZes1vzALVBI0N7YZpan41C/wLA7CQk6mAOY01FZfTq9jArIYvdnn6BDb2DnoGWPCIdW2mUeGeriUwMqGXXXEboUqJ2KfAnSgkLhNfjeFl7YwnpA8pEmEhF6hlfIyVcjVIdUYVmC4jISa5h2EsrvU5XQ0Mt4OjEaylb0ykCt93UtwBQhSILQDZidOsdXPZ3JtH9ruXdC/UkKtZIaxzbL1AAynJhbE9EOjYaQC17ZiCZxfC9vqK/9T+DK1tPQnmfSIzfVEJ5PpN73DNQGjMFkNA1JuuBGhD5zrqBi3ghy0//1UTP7wVAbzD2wAXA2Ax76y8e8Bga+/fZe+Abntu2MfzR5rcAAAAASUVORK5CYII="
        />
        <img 
          className='Email_Icon' 
          onClick={() => window.location.href = 'mailto:SAKarl09@outlook.com'} 
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAVlJREFUaEPtmUESwjAIRenN9GTqyfRmWhZxYiSQBkjTDtk4Y03Kfx+aYBc4+FgOHj+EgL0dDAfCASWB06bQBQBuAICfM4zHGsSdCqTmwHuGqIkYrivUV/49JQCVIv0ZBwaPIr6DEjAr/RT0T8yzC0DiZR1uFoAT9kirVLhlRnQJQPtGiUDqGHwqVjMBKQc9hVCPS3MBHm6U1PMHjVpAdRMxSitufSzgZ/E831wDON9DBEedc7lLQIJgJUSizh1jVAK0bvRSr26+mo1sqxsa6i4CWt2woO4moKU2aofC3iO7ugZqAXEpUs7RbIZuAlrc6KXunkIlYcoNDfXhAnI3sIgt21P3FPLu5EKAN2Fp/XBAIuR9PRzwJiytHw5IhLyviw5gDzrLn7riEYVqaKhG2ptq6/p/8XLvB6wOX63Bcb+rNkWnfcFhQW3IGuHAEMzMTcKBcEBJ4PAp9AGloFoxlr+6BgAAAABJRU5ErkJggg=="
        />

        </div>
      </div>
    </div>
  );
}




export default Contact_SocialMedia;
