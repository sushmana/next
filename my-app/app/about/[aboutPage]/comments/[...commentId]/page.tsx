import React from 'react'

const Comment = async ({params,}: {params: Promise<{ aboutPage: string; commentId?: string[] }>;}) => {
    const paramsObj = await params;;
    const {aboutPage, commentId} = paramsObj;
    console.log("Comment Page Params: ", paramsObj);
    console.log("Comment Page About Page: ", aboutPage);
    console.log("Comment Page Comment ID: ", commentId);
  return (
    <div>
      Comment Page  : {commentId?.join('/')} for About Page: {aboutPage}
    </div>
  )
}

export default Comment
