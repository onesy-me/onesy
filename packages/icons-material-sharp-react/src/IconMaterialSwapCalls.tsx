import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwapCalls = (props: IIcon) => {

  return (
    <Icon
      name='SwapCalls'

      short_name='SwapCalls'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200 80-360l56-58 64 64v-286q0-66 47-113t113-47q66 0 113 47t47 113v280q0 33 23.5 56.5T600-280q33 0 56.5-23.5T680-360v-286l-64 64-56-58 160-160 160 160-56 58-64-64v286q0 66-47 113t-113 47q-66 0-113-47t-47-113v-280q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640v286l64-64 56 58-160 160Z"/>
    </Icon>
  );
};

IconMaterialSwapCalls.displayName = 'OnesyIconMaterialSwapCalls';

export default IconMaterialSwapCalls;
