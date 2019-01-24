import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'
import { Mail, Send } from 'react-feather'

import Layout from '../components/layout'
import gopay from '../images/gopay.jpg'

const Section = styled.div`
  ${tw`mb-12`}
`

const ContactList = styled.ul`
  ${tw`list-reset`}
`

const ContactItem = styled.li`
  ${tw`flex items-center ml-4`}
`

const ContactIcon = styled.div`
  ${tw`flex items-center mr-2`}
`

const IndexPage = () => (
  <Layout>
    <Section>
      <h2>@wayanjimmy</h2>
      <p>
        Web developer from <i>Bali</i>, currently focusing into PHP & Javascript
      </p>
      <p>
        Currently working as a <i>fulltime</i> Web Developer for{' '}
        <a href="https://www.gogoprint.co.id/" target="_blank">
          Gogoprint Indonesia
        </a>
      </p>
    </Section>
    <Section>
      <h2>projects</h2>
      <ul>
        <li>
          <a href="https://github.com/wayanjimmy/thejsway_id" target="_blank">
            thejsway_id
          </a>{' '}
          - the js way translated into bahasa indonesia
        </li>
        <li>
          <a href="https://github.com/wayanjimmy/wifian-dibali" target="_blank">
            wifian-dibali
          </a>{' '}
          - listing of public place to work accross bali
        </li>
        <li>
          <a href="https://github.com/wayanjimmy/grosirobatjs" target="_blank">
            grosirobatjs
          </a>{' '}
          - fullstack javascript application built with express & react
        </li>
      </ul>
    </Section>
    <Section>
      <h2>donate</h2>
      <ul>
        <li>
          <a href="https://www.paypal.me/wayanjimmy" target="_blank">
            paypal
          </a>
        </li>
        <li>
          <a href={gopay} target="_blank">
            gopay
          </a>
        </li>
      </ul>
    </Section>
    <Section>
      <h2>contact</h2>
      <ContactList>
        <ContactItem>
          <ContactIcon>
            <Mail size={16} />
          </ContactIcon>
          <a href="mailto:jimmyeatcrab@gmail.com" target="_blank">
            email
          </a>
        </ContactItem>
        <ContactItem>
          <ContactIcon>
            <Send size={16} />
          </ContactIcon>
          <a href="https://t.me/wayanjimmy" target="_blank">
            telegram
          </a>
        </ContactItem>
      </ContactList>
    </Section>
  </Layout>
)

export default IndexPage
