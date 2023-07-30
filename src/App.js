import Box from '@awsui/components-react/box';
import Button from '@awsui/components-react/button';
import ColumnLayout from '@awsui/components-react/column-layout';
import Container from '@awsui/components-react/container';
import Link from '@awsui/components-react/link';
import FormField from '@awsui/components-react/form-field';
import Grid from '@awsui/components-react/grid';
import Header from '@awsui/components-react/header';
import SpaceBetween from '@awsui/components-react/space-between';
// import Select from '@awsui/components-react/select';
import './App.css';
import React from 'react';



function App() {
  
  
  return (
    <div className="App">



    <Box margin={{ bottom: 'l' }}>
      <div className="custom-home__header">
        <Box padding={{ vertical: 'xxxl', horizontal: 's' }}>
          <Grid
            gridDefinition={[
              { offset: { l: 2, xxs: 1 }, colspan: { l: 8, xxs: 10 } },
              { colspan: { xl: 6, l: 5, s: 6, xxs: 10 }, offset: { l: 2, xxs: 1 } },
              { colspan: { xl: 2, l: 3, s: 4, xxs: 10 }, offset: { s: 0, xxs: 1 } },
            ]}
          >
            <Box fontWeight="light" padding={{ top: 'xs' }}>
              <span className="custom-home__category">MACHINE LEARNING</span>
            </Box>
            <div className="custom-home__header-title">
              <Box variant="h1" fontWeight="heavy" padding="n" fontSize="display-l" color="inherit">
              Amazon SageMaker
              </Box>
              <Box fontWeight="light" padding={{ bottom: 's' }} fontSize="display-l" color="inherit">
              Build, train, and deploy machine learning models at scale
              </Box>
              <Box variant="p" fontWeight="light">
                <span className="custom-home__header-sub-title">
                The quickest and easiest way to get ML models from idea to production.
                </span>
              </Box>
            </div>
            <div className="custom-home__header-cta">
              <Container>
                <SpaceBetween size="xl">
                  <Box variant="h2" padding="n">
                  New to SageMaker?

                  </Box>
                  <FormField stretch={true} label="Get started with Amazon SageMaker by completing the quick start guide.">
                    {/* <Select
                      selectedAriaLabel="Selected"
                      options={cloudfrontDistributions}
                      selectedOption={selectedOption}
                      ariaRequired={true}
                      onChange={e => setSelectedOption(e.detail.selectedOption)}
                    /> */}
                  </FormField>
                  
                  <Button className='buttoncolor' href="#" variant="primary">
                    Get Started
                  </Button>
                
                </SpaceBetween>
              </Container>
            </div>
          </Grid>
        </Box>
      </div>

      <Box padding={{ top: 'xxxl', horizontal: 's' }}>
        <Grid
          gridDefinition={[
            { colspan: { xl: 6, l: 5, s: 6, xxs: 10 }, offset: { l: 2, xxs: 1 } },
            { colspan: { xl: 2, l: 3, s: 4, xxs: 10 }, offset: { s: 0, xxs: 1 } },
          ]}
        >
          <SpaceBetween size="xxl">
            <div>
              <Box variant="h1" tagOverride="h2" padding={{ bottom: 's', top: 'n' }}>
                How it works
              </Box>
          
              <Container>
              

                  <div>
                  <SpaceBetween size="xs">
    
                  <Box variant="h2" padding={{ top: 'n' }}>
                  What is Amazon SageMaker?
                    </Box>

                    <Box variant="p">
                    Amazon SageMaker Ground Truth uses a machine learning model to automatically attempt to label training data. Any data that can't be confidently labeled by the model is automatically sent to human labelers. The human labeled data is provided back to the model so that it can continuously learn and improve.
                    </Box>
                </SpaceBetween>

            
                  </div>
                  <SpaceBetween size="s"  padding={{ top: 'n' }}>
                      <hr></hr>
                  </SpaceBetween>
                

                  <div>
                  <SpaceBetween size="xs">
    
                  <Box variant="h2" padding={{ top: 'n' }}>
                  Typical SageMaker workflow
                    </Box>

                    <Box variant="h3">
                    <img src="./public/logo512.png" alt="logo" />
                   {/* <img src={require('./public/logo512.png').default} />  */}

                  
                    1. Label data
              
                   </Box>
                   <Box variant="p">
                  
                    Set up and manage labeling jobs for highly accurate training datasets within 
                    Amazon SageMaker, using active learning and human labeling. 
                   </Box>

                   <Box variant="h3">
                    2. Build
              
                   </Box>
                   <Box variant="p">
                  
                   Connect to other AWS services and transform data in Amazon SageMaker 
                   notebooks.                   
                   </Box>

                   <Box variant="h3">
                    3. Train
              
                   </Box>
                   <Box variant="p">
                  
                   Use Amazon SageMaker's algorithms and frameworks, or bring your 
                   own, for distributed training.
                   </Box>

                   <Box variant="h3">
                    4. Tune
              
                   </Box>
                   <Box variant="p">
                  
                   Amazon SageMaker automatically tunes your model by adjusting 
                   multiple combinations of algorithm parameters. 
                   </Box>

                   <Box variant="h3">
                    5. Deploy
              
                   </Box>
                   <Box variant="p">
                   After training is completed, models can be deployed to Amazon SageMaker 
                   endpoints, for real-time predictions.


                   </Box>

                   <Box variant="h3">
                    6. Discover
              
                   </Box>
                   <Box variant="p">
                  
                   Find, buy, and deploy ready-to-use model packages, algorithms, and data 
                   products in AWS Marketplace.           
                   </Box>
                  

                </SpaceBetween>

            
                  </div>

                  <SpaceBetween size="xl">
                      <hr></hr>
                  </SpaceBetween>
                  
                  <div>
                  <SpaceBetween size="xs">
    
                  <Box variant="h3" padding={{ top: 'n' }}>
                  Introduction video
                    </Box>

                    <Box variant="h3" padding={{ top: 'n' }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Z6Y9VIc6nkk" 
                     title="YouTube video player" frameborder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

                     </iframe>
                    </Box>
                   


                      {/* <video width="320" height="240" controls autoPlay>
                       <source src="src/learning.mp4.mp4" type="video/mp4" />
                      </video>  */}
                      <Link
                      external={true}
                      href="#"
                      ariaLabel="Learn more about multiple origins configuration, opens in new tab"
                    >
                      Explore video tutorials
                    </Link>
              

                </SpaceBetween>


                  </div>
                
              

            


              </Container>
            </div>

            <div>
              <Box variant="h1" tagOverride="h2" padding={{ bottom: 's', top: 'n' }}>
                Benefits and features
              </Box>
              <Container>
                <ColumnLayout columns={2} variant="text-grid">
                  <div>
                    <Box variant="h3" padding={{ top: 'n' }}>
                    Labeling raw data with active learning
                    </Box>
                    <Box variant="p">
                    Amazon SageMaker Ground Truth uses a machine learning model to automatically attempt to label training data. Any data that can't be confidently labeled by the model is automatically sent to human labelers. The human labeled data is provided back to the model so that it can continuously learn and improve.
                    </Box>
                  </div>
                  <div>
                    <Box variant="h3" padding={{ top: 'n' }}>
                    Highly accurate training datasets

                    </Box>
                    <Box variant="p">
                    Active learning models from Amazon SageMaker Ground Truth provide a very high level of consistency and accuracy for training datasets, without the burden of audits and asking for the same data to be labeled multiple times to remove outliers.
                    </Box>
                  </div>
                  <div>
                    <Box variant="h3" padding={{ top: 'n' }}>
                    Fully-managed notebook instances
                    </Box>
                    <Box variant="p">
                    For training data exploration and preprocessing, Amazon SageMaker provides fully managed instances running Jupyter notebooks that include example code for common model training and hosting exercises.
                    </Box>
                  </div>
                  <div>
                    <Box variant="h3" padding={{ top: 'n' }}>
                    Highly-optimized machine learning algorithms
                    </Box>
                    <Box variant="p">
                    Amazon SageMaker installs high-performance, scalable machine learning algorithms optimized for speed, scale, and accuracy, to run on extremely large training datasets.                    </Box>
                  </div>

                  <div>
                    <Box variant="h3" padding={{ top: 'n' }}>
                    One-click training
                    </Box>
                    <Box variant="p">
                    When you're ready to train in Amazon SageMaker, simply indicate the type and quantity of instances you need and initiate training with a single click.
                    </Box>
                  </div>

                  <div>
                    <Box variant="h3" padding={{ top: 'n' }}>
                    Deployment without engineering effort
                    </Box>
                    <Box variant="p">
                    After training, SageMaker provides the model artifacts and scoring images to you for deployment to Amazon EC2 or anywhere else.
                    </Box>
                  </div>
                </ColumnLayout>
              </Container>
            </div>
           

            <div>
              <Box variant="h1" tagOverride="h2" padding={{ bottom: 's', top: 'n' }}>
              Our clients
              </Box>
              <Container>
                <ColumnLayout columns={2} variant="text-grid">
                  <div>
                    <Box variant="h3" padding={{ top: 'n' }}>
                    Thousands of data scientists trust SageMaker
                    </Box>
                    <Box variant="p">
                    Amazon SageMaker makes it easier to create and deploy models for many types of machine learning problem.
                    </Box>
                    <Link
                      external={true}
                      href="#"
                      ariaLabel="Learn more about multiple origins configuration, opens in new tab"
                    >
                      Learn more
                    </Link>
                  </div>
               

                  
                </ColumnLayout>
              </Container>
            </div>
          </SpaceBetween>
          <div className="custom-home__sidebar">
            <SpaceBetween size="xxl">
              <Container header={<Header variant="h2">Documentation</Header>}>
                    <Link
                      external={true}
                      href="#"
                      ariaLabel="Learn more about multiple origins configuration, opens in new tab"
                    >
                      Getting started 
                    </Link>
                    <Box variant="p">
                    </Box>
                    <Link
                      external={true}
                      href="#"
                      ariaLabel="Learn more about multiple origins configuration, opens in new tab"
                    >
                      Tutorials
                    </Link>
                    <Box variant="p">
                    </Box>
                    <Link
                      external={true}
                      href="#"
                      ariaLabel="Learn more about multiple origins configuration, opens in new tab"
                    >
                     Documentation
                    </Link>
                    <Box variant="p">
                    </Box>
                    <Link
                      external={true}
                      href="#"
                      ariaLabel="Learn more about multiple origins configuration, opens in new tab"
                    >
                      Developer Resources
                    </Link>
                    <Box variant="p">
                    </Box>
                    <Link
                      external={true}
                      href="#"
                      ariaLabel="Learn more about multiple origins configuration, opens in new tab"
                    >
                     AWS Developer Forum 
                    </Link>
                    <Box variant="p">
                    </Box>
                    <Link
                      external={true}
                      href="#"
                      ariaLabel="Learn more about multiple origins configuration, opens in new tab"
                    >
                      Contact us 
                    </Link>
             
              </Container>

              {/* <ExternalLinkGroup
                header="Getting started"
                groupAriaLabel="Getting started documentation, Links open in a new tab"
                variant="container"
                items={[
                  {
                    href: 'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html',
                    text: 'What is Amazon CloudFront?',
                  },
                  {
                    href: 'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.html',
                    text: 'Getting started with CloudFront',
                  },
                  {
                    href: 'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-working-with.html',
                    text: 'Working with CloudFront distributions',
                  },
                ]}
              /> */}

              {/* <ExternalLinkGroup
                header="More resources"
                groupAriaLabel="Additional resource links, Links open in a new tab"
                variant="container"
                items={[
                  { href: 'https://aws.amazon.com/documentation/cloudfront/', text: 'Documentation' },
                  { href: '#', text: 'FAQ' },
                  { href: '#', text: 'CloudFront forum' },
                  { href: '#', text: 'Contact us' },
                ]}
              /> */}
            </SpaceBetween>
          </div>
        </Grid>
      </Box>
    </Box>


    </div>




  );
}

export default App;