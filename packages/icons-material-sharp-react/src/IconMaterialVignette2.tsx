import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVignette2 = (props: IIcon) => {

  return (
    <Icon
      name='Vignette2'

      short_name='Vignette2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Zm280-40q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Zm0-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"/>
    </Icon>
  );
};

IconMaterialVignette2.displayName = 'OnesyIconMaterialVignette2';

export default IconMaterialVignette2;
