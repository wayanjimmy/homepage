import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'
import { Mail, Send, Twitter } from 'react-feather'

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

const BlackLink = styled.a`
  ${tw`text-black no-underline hover:underline`}
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
          <BlackLink href="https://wayanjimmy.netlify.com" target="_blank">
            blog
          </BlackLink>
          - personal blog in bahasa indonesia
        </li>
        <li>
          <BlackLink href="https://github.com/wayanjimmy/thejsway_id" target="_blank">
            thejsway_id
          </BlackLink>{' '}
          - the js way translated into bahasa indonesia
        </li>
        <li>
          <BlackLink href="https://wifian-dibali.netlify.com" target="_blank">
            wifian-dibali
          </BlackLink>{' '}
          - listing of public place to work accross bali
        </li>
        <li>
          <BlackLink href="https://grosirobatjs.herokuapp.com" target="_blank">
            grosirobatjs
          </BlackLink>{' '}
          - fullstack javascript application built with express & react
        </li>
        <li>
          <BlackLink href="http://github.com/wayanjimmy/ts-algorithms" target="_blank">
            ts-algorithms
          </BlackLink>{' '}
          - learn computer science and algorithms with typescript
        </li>
          <li>
          <BlackLink href="http://jadwalnonton.herokuapp.com" target="_blank">
            jadwalnonton
          </BlackLink>{' '}
          - unofficial graphql api for checking local movie & schedule
        </li>
      </ul>
    </Section>
    <Section>
      <h2>donate</h2>
      <ul>
        <li>
          <BlackLink href="https://www.paypal.me/wayanjimmy" target="_blank">
            paypal
          </BlackLink>
        </li>
        <li>
          <BlackLink href={gopay} target="_blank">
            gopay
          </BlackLink>
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
          <BlackLink
            href="mailto:jimmyeatcrab@gmail.com"
            target="_blank"
            className="no-underline"
          >
            email
          </BlackLink>
        </ContactItem>
        <ContactItem>
          <ContactIcon>
            <Send size={16} />
          </ContactIcon>
          <BlackLink
            href="https://t.me/wayanjimmy"
            target="_blank"
            className="no-underline"
          >
            telegram
          </BlackLink>
        </ContactItem>
      </ContactList>
    </Section>
  </Layout>
)

export default IndexPage
