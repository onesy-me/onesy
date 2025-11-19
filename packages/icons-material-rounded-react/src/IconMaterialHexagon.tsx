import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHexagon = (props: IIcon) => {

  return (
    <Icon
      name='Hexagon'

      short_name='Hexagon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M318-120q-22 0-40-10.5T249-160L87-440q-11-19-11-40t11-40l162-280q11-19 29-29.5t40-10.5h324q22 0 40 10.5t29 29.5l162 280q11 19 11 40t-11 40L711-160q-11 19-29 29.5T642-120H318Zm0-80h324l161-280-161-280H318L156-480l162 280Zm162-280Z"/>
    </Icon>
  );
};

IconMaterialHexagon.displayName = 'OnesyIconMaterialHexagon';

export default IconMaterialHexagon;
