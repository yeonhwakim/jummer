import React, { useEffect } from 'react'
import io from 'socket.io-client'

export default () => {

  useEffect(() => {
    window.socket = io('http://localhost:3000', {
      transports: ['websocket']
    })
    console.log('socket connect')
    socket.on('connect', () => {
      socket.emit('test', 'karen')
      console.log('socket connected')
      socket.emit('test')
    })
  },[])

  return <></>
}