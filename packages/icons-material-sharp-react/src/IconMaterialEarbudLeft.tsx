import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEarbudLeft = (props: IIcon) => {

  return (
    <Icon
      name='EarbudLeft'

      short_name='EarbudLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80v-400H120v-320h440v80H200v160h120v400h80v-400h160v80h-80v400H240Zm320-320v-480h40q100 0 170 70t70 170q0 100-70 170t-170 70h-40Zm80-85q54-14 87-57t33-98q0-55-33-98t-87-57v310ZM360-640Zm280 0Z"/>
    </Icon>
  );
};

IconMaterialEarbudLeft.displayName = 'OnesyIconMaterialEarbudLeft';

export default IconMaterialEarbudLeft;
