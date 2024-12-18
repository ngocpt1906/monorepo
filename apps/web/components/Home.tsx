"use client";
import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { Button } from "./ui/button";

function Home() {
  return (
    <div>
      <Container className="py-0 h-[200px]">
        <Flex className="gap-[40px] py-[80px]">
          <div className="leading-[64px] text-center">
            <div>The Powerhouse in Healthcare</div>
            <div>From Tech to Touch</div>
          </div>
          <div>
            <p>
              When care is within reach, better health becomes possible for all
            </p>
          </div>
          <div>
            <Button>Discover Our Solutions</Button>
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Home;
