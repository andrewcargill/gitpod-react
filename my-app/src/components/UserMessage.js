import React from 'react'

function UserMessage(props) {
  return (
    <div>
        <h2>
            {
                props.isLoggedIn ? (
                    <div>
                        <p>welcome to the site. Please complete the steps below:</p>
                        <ol>
                            <li>Confirm Email</li>
                            <li>Complete Profile</li>
                            <li>Subscribe to newsletter</li>
                        </ol>
                    </div>
                ): (
                    <p>Please Sign In</p> 
                )
            }
        </h2>
    </div>
  )
}

export default UserMessage