import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPriorityW100 = (props: IIcon) => {

  return (
    <Icon
      name='PriorityW100'

      short_name='Priority'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-172q-78.33 0-133.17-54.83Q172-281.67 172-360v-240q0-78.33 54.83-133.17Q281.67-788 360-788h240q78.33 0 133.17 54.83Q788-678.33 788-600v240q0 78.33-54.83 133.17Q678.33-172 600-172H360Zm80-184 204-204-20-20-184 184-88-88-20 20 108 108Zm-80 156h240q66 0 113-47t47-113v-240q0-66-47-113t-113-47H360q-66 0-113 47t-47 113v240q0 66 47 113t113 47Zm120-280Z"/>
    </Icon>
  );
};

IconMaterialPriorityW100.displayName = 'OnesyIconMaterialPriorityW100';

export default IconMaterialPriorityW100;
