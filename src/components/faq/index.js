import React from 'react';
import { Container } from 'react-bootstrap';
import SlideToggle from 'react-slide-toggle';

const FaqData = [
  {
    title: `What is NFT?`,
    content: `NFT stands for 'non-fungible token. 
              An NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique. 
              An NFT can, for example, represent a unique piece of art or a game token.`
  },
  {
    title: `What does MINT mean?`,
    content: `NFT Minting is the process by which your digital art or digital content becomes a part of the Ethereum blockchain.`
  },
  {
    title: `How many NFTs will be available?`,
    content: `Hip Ass Ape is a collection of 10,000 NFTs.`
  },
  {
    title: `What is a whitelist?`,
    content: `Whitelist give you access to Pre-Mint and Let's you Mint at relatively lower Gas Fee.`
  },
  {
    title: `How can I get on Whitelist?`,
    content: `You can get access to the whitelist by participating in giveaways on our social media (Instagram, Twitter), or to win contest, games on Discord.`
  }
];

function Faq() {
  return (
    <Container>
      <h2 className="splitAnim" data-aos="fade-up" data-aos-duration="3000">faq</h2>
      <div className="faq-list">
        {
          FaqData.map((item, index) => (
            <div key={index} className="js-accordion" data-aos="fade-up" data-aos-duration="3000">
              <SlideToggle
                duration={1000}
                collapsed={true}
                whenReversedUseBackwardEase={false}
                render={({ toggle, setCollapsibleElement }) => (
                  <div>
                    <h4 className="js-accordion-toggle" onClick={toggle}>{item.title}</h4>
                    <div className="card-body p-0" ref={setCollapsibleElement}>
                      <div className="p-4 faq-content">
                        <p>{item.content}</p>
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          ))
        }
      </div>
    </Container>
  )
}

export default Faq;