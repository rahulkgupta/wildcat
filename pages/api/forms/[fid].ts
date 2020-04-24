import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { fid },
  } = req

  res.status(200).json({
    key: fid,
})
}
