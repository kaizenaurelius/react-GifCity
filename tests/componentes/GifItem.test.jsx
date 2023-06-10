import { render, screen } from '@testing-library/react'
import GifItem from '../../src/componentes/Gifitem';




describe('Pruebas en GifITem', () => {
    

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.png';


    test('should match snapshot ', () => {

      const { container } = render( <GifItem  title={ title } url={ url } /> );
      expect( container ).toMatchSnapshot();

    })

    test('should show img with right URL and ALT ', () => {
        render( <GifItem title={ title } url= { url } />);
        const { src, alt } = screen.getByRole( 'img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    })
    
    test('should mostrar el titulo en el componente ', () => {
        render( <GifItem title={ title } url= { url } />);
        expect( screen.getByText( title )).toBeTruthy();
    })
        
});