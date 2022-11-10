import React, { useState } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
  MDBCheckbox
} from 'mdb-react-ui-kit';

export default function ConnectPrescribe() {
  const [basicActive, setBasicActive] = useState('Prescription1');

  const handleBasicClick = (value: string) => {
    if (value === basicActive) return;

    setBasicActive(value);
  }

  return (
    <MDBContainer className="py-5 h-100 gradient-custom">
      <h1>Available Prescriptions</h1>
      <MDBRow>
        <MDBCol size={4}>
          <MDBListGroup light small>
            <MDBTabs>
              <MDBListGroupItem action active={basicActive === 'Prescription1'} noBorders className='px-3'>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleBasicClick('Prescription1')}>
                    <MDBCheckbox inline /> Prescription1
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBListGroupItem>
              <MDBListGroupItem action active={basicActive === 'Prescription2'} noBorders className='px-3'>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleBasicClick('Prescription2')}>
                    <MDBCheckbox inline /> Prescription2
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBListGroupItem>
              <MDBListGroupItem action active={basicActive === 'Prescription3'} noBorders className='px-3'>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleBasicClick('Prescription3')}>
                    <MDBCheckbox inline />Prescription3
                    </MDBTabsLink>
                </MDBTabsItem>
              </MDBListGroupItem>
              <MDBListGroupItem action active={basicActive === 'Prescription4'} noBorders className='px-3'>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleBasicClick('Prescription4')}>
                    <MDBCheckbox inline /> Prescription4
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBListGroupItem>
            </MDBTabs>
          </MDBListGroup>
        </MDBCol>

        <MDBCol size={8}>
          <MDBTabsContent>
            <MDBTabsPane show={basicActive === 'Prescription1'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore impedit quibusdam exercitationem
              eligendi voluptate doloribus non pariatur libero quod nobis mollitia odio dolore eos debitis iure,
              autem quisquam ullam beatae.
            </MDBTabsPane>
            <MDBTabsPane show={basicActive === 'Prescription2'}>
              Ea eos asperiores deserunt reprehenderit voluptatem deleniti dolor iure eum consectetur commodi.
            </MDBTabsPane>
            <MDBTabsPane show={basicActive === 'Prescription3'}>
              Et perspiciatis facilis labore natus at necessitatibus. Sequi earum qui illum reiciendis? Excepturi,
              dicta consequuntur, voluptas aspernatur, quis laboriosam exercitationem quasi officia tempore iste
              assumenda aliquam.
            </MDBTabsPane>
            <MDBTabsPane show={basicActive === 'Prescription4'}>
              Praesentium asperiores nemo ratione quas atque excepturi odio aliquid libero, architecto aspernatur
              expedita, corrupti, rem odit quos exercitationem maxime at. Ex, eveniet rerum laborum accusamus
              delectus magnam maxime!
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>

      <MDBRow>  
        <button class="btn btn-primary btn-lg btn-block" type="submit">Proceed to Order Details</button>
      </MDBRow>   

    </MDBContainer>
  );
}