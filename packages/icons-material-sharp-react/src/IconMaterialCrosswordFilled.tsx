import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrosswordFilled = (props: IIcon) => {

  return (
    <Icon
      name='CrosswordFilled'

      short_name='Crossword'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-80v-240h240v240H360ZM80-360v-240h240v240H80Zm280 0v-240h240v240H360Zm280 0v-240h240v240H640Zm0-280v-240h240v240H640Z"/>
    </Icon>
  );
};

IconMaterialCrosswordFilled.displayName = 'OnesyIconMaterialCrosswordFilled';

export default IconMaterialCrosswordFilled;
