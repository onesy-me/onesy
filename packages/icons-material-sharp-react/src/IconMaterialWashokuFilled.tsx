import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWashokuFilled = (props: IIcon) => {

  return (
    <Icon
      name='WashokuFilled'

      short_name='Washoku'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m280-120-61-184q-36-20-61-53t-36-75L90-560h780l-32 128q-11 42-36 75t-61 53l-61 184H280Zm520-520H160q0-50 34.5-85t83.5-35q8 0 17 1.5t17 3.5q17-38 51.5-61.5T440-840q48 0 84.5 28.5T574-737q19-20 44-31.5t53-11.5q54 0 91.5 38t37.5 92v10Z"/>
    </Icon>
  );
};

IconMaterialWashokuFilled.displayName = 'OnesyIconMaterialWashokuFilled';

export default IconMaterialWashokuFilled;
