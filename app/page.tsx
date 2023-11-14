import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { GridLayout } from '@/components/GridLayout/GridLayout';
import { FloatingLabelInput } from '@/components/FloatingLabel/FloatingLabel';
import { SliderInput } from '@/components/SliderInput/SliderInput';
import { CSSProperties } from 'react';
import StocksList from '@/components/Accordion/StocksList';



export default function HomePage() {
  const divStyle: CSSProperties = {
    width: '80%',
    height: '90%',
    margin: '5vh auto',
  };
  
  const spacer: CSSProperties = {
    marginBottom: '0.5vh'
  }

  return (
    <>
    <div style={divStyle}>
      <FloatingLabelInput/>
      <SliderInput/>
      <div style={spacer}> </div>
      <StocksList/>
    </div>
    </>
  );
}
