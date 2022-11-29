import React, { useEffect, useState } from 'react'
import Conversor from '../../components/Conversor'
import Title from '../../components/Title'
import { binaryToText, textToBinary } from '../../utils/binaryConversor'
enum binaryCode {
  RESULT = 'Result',
  BINARY = 'Binary',
  TEXT = 'ASCII Text',
}

const BinaryText = () => {
  const [currentTextarea, setCurrentTextarea] = useState<boolean>(true)
  const [result, setResult] = useState<string>('')
  const [binary, setBinary] = useState('')
  const [text, setText] = useState('')

  const binaryToTextHandler = (value: string) => {
    setBinary(value)
    setResult(binaryToText(value))
  }

  const textToBinaryHandler = (value: string) => {
    setText(value)
    setResult(textToBinary(value))
  }

  const switchTextarea = () => {
    setResult('')
    setText('')
    setBinary('')
    setCurrentTextarea(!currentTextarea)
    return
  }

  return (
    <>
      <Title>
        <>Binary / Text conversion</>
      </Title>
      <Conversor>
        {currentTextarea ? (
          <Conversor.Group type={binaryCode.BINARY} title={binaryCode.BINARY}>
            <Conversor.Textarea
              title={binaryCode.BINARY}
              value={binary}
              getValue={binaryToTextHandler}
            />
          </Conversor.Group>
        ) : (
          <Conversor.Group type={binaryCode.TEXT} title={binaryCode.TEXT}>
            <Conversor.Textarea
              title={binaryCode.TEXT}
              value={text}
              getValue={textToBinaryHandler}
            />
          </Conversor.Group>
        )}

        <Conversor.Group type={binaryCode.RESULT} title={binaryCode.RESULT}>
          <Conversor.Textarea
            title={binaryCode.RESULT}
            disabled={true}
            value={result}
          />
        </Conversor.Group>
      </Conversor>
      <button onClick={() => switchTextarea()}>Switch</button>
    </>
  )
}

export default BinaryText
