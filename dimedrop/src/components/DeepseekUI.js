import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Press Start 2P', cursive;
  background: #1a1a1a;
  padding: 20px;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 20px;
  color: #00ff00;
  min-height: 100vh;
  image-rendering: pixelated;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Box = styled.div`
  border: 4px dashed #ff0000;
  padding: 15px;
  background: #000000;
`;

const Title = styled.h2`
  color: #ff0000;
  font-size: 1.2rem;
  margin: 0 0 15px 0;
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
`;

const AttributeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const ProgressBar = styled.div`
  height: 20px;
  background: #333;
  border: 2px solid #00ff00;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: ${props => props.percentage}%;
    height: 100%;
    background: #00ff00;
  }
`;

const PixelImage = styled.img`
  image-rendering: pixelated;
  width: 100%;
  border: 3px solid #00ff00;
  margin: 10px 0;
`;

const DeepseekUI = () => {
  return (
    <Container>
      <Sidebar>
        <Box>
          <Title>STATUS</Title>
          
          <div>
            <h3>Health</h3>
            <StatItem><span>Attack</span> <span>10</span></StatItem>
            <StatItem><span>Speed</span> <span>5</span></StatItem>
            <StatItem><span>Magic</span> <span>5</span></StatItem>
          </div>

          <PixelImage 
            src="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg" 
            alt="logo"
          />

          <div>
            <StatItem><span>L24</span> <span>+10</span></StatItem>
            <StatItem><span>34</span> <span>+5</span></StatItem>
            <StatItem><span>34</span> <span>+5</span></StatItem>
            <StatItem><span>34</span> <span>+5</span></StatItem>
          </div>

          <div>
            <h3>Communication</h3>
            <p>Attribute that will increase health.</p>
          </div>
        </Box>

        <Box>
          <Title>EQUIPMENT</Title>
          <h3>INTEMPORV</h3>
          <div>
            <h4>STD load</h4>
            <StatItem>
              <span>Bread Snored</span>
              <span>1/10</span>
            </StatItem>
            <ProgressBar percentage={10} />
          </div>
        </Box>
      </Sidebar>

      <div>
        <Box style={{ marginBottom: '20px' }}>
          <Title>ATTRIBUTES</Title>
          <h3>Level 10</h3>
          <AttributeGrid>
            <div>CDF</div>
            <div>1/10</div>
            <div>STR</div>
            <div>SET</div>
            <div>SET</div>
            <div>LUC</div>
            <div>BECAUDIO</div>
          </AttributeGrid>
        </Box>

        <Box>
          <Title>STRUCT</Title>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>COPYLAND</li>
            <li>CONTINUED</li>
            <li>CULTURE</li>
          </ul>
          <PixelImage
            src="https://images.unsplash.com/photo-1587573089730-2762b705435b"
            alt="structure"
          />
        </Box>
      </div>
    </Container>
  );
};

export default DeepseekUI;