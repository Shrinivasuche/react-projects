import React from 'react'

function Card({userName = "HC" ,post = "not assigned yet"}) {
  //console.log(props)
  return (
    <div>
          <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
          <img 
            className="w-24 h-24 rounded-full mx-auto" 
            src="https://buffer.com/resources/content/images/size/w1000/2024/11/free-stock-image-sites.png" 
            alt="" 
            width="384" 
            height="512"
          />
          <div className="pt-6 space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tempore!
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                {userName}
              </div>
              <div className="text">
                {post}
              </div>
            </figcaption>
          </div>
        </figure>
    </div>
  )
}

export default Card