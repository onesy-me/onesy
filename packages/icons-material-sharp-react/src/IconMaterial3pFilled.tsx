import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3pFilled = (props: IIcon) => {

  return (
    <Icon
      name='3pFilled'

      short_name='3p'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-400h320v-22q0-44-44-71t-116-27q-72 0-116 27t-44 71v22Zm160-160q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560ZM80-80v-800h800v640H240L80-80Z"/>
    </Icon>
  );
};

IconMaterial3pFilled.displayName = 'OnesyIconMaterial3pFilled';

export default IconMaterial3pFilled;
