import { Box, Flex } from '@chakra-ui/react';
import { AiOutlineCluster } from 'react-icons/all';
import clusterStore from '../../stores/Clusters';
import nodeStore from '../../stores/Nodes';
import { observer } from 'mobx-react-lite';

const CustomMenu = () => {
  const { data: clusters, activeElement } = clusterStore;

  const handleClick = async (id: number) => {
    await nodeStore.getData(id);
    clusterStore.setActive(id);
  };

  return (
    <>
      <Flex
        flexDirection={'column'}
        alignItems={'center'}
        w={'100%'}
        maxW={'260px'}
      >
        <Flex
          gap={'10px'}
          mb={'21px'}
          fontSize={'18px'}
          w={'100%'}
          maxW={'240px'}
          justifyContent={'space-between'}
          alignItems={'center'}
          p={'6px 12px'}
        >
          Кластеры
          <AiOutlineCluster />
        </Flex>
        <Flex
          flexDirection={'column'}
          gap={'10px'}
          p={'10px'}
          boxShadow={'0px 1px 2px 0px rgba(0, 0, 0, 0.05)'}
          w={'100%'}
          borderRadius={'10px'}
        >
          {clusters.map((cluster) => (
            <Box
              cursor={'pointer'}
              fontSize={'15px'}
              fontWeight={'600'}
              textTransform={'uppercase'}
              p={'6px 12px'}
              key={cluster.id}
              borderRight={`${
                activeElement === cluster.id && '4px solid #2D96D6'
              }`}
              color={`${activeElement === cluster.id ? '#1F9DC2' : '#000'}`}
              bg={`${activeElement === cluster.id ? '#E0F9FE' : '#fff'}`}
              _hover={{ bg: '#E0F9FE' }}
              marginBottom={'10px'}
              onClick={() => handleClick(cluster.id)}
            >
              {cluster.name}
            </Box>
          ))}
        </Flex>
      </Flex>
    </>
    // <Menu closeOnSelect={false}>
    //     <MenuButton as={Button}
    //                 bg={'white'}
    //                 gap={'10px'}
    //                 w={'240px'}
    //                 fontSize={'18px'}
    //                 fontWeight={'400'}
    //                 textAlign={'left'}
    //                 _hover={{ bg: '#fff', boxShadow: 'outline' }}
    //                 _expanded={{ bg: '#fff', boxShadow: 'outline' }}
    //                 rightIcon={<AiOutlineCluster/>}
    //     >
    //       Кластеры
    //     </MenuButton>
    //     <MenuList mt={'11px'} w={'240px'}  p={'10px'} bg={'#fff'} boxShadow={'0px 1px 2px 0px rgba(0, 0, 0, 0.05)'}>
    //         <MenuOptionGroup defaultValue='a' w={'240px'} type={'radio'}>
    //                 <MenuItemOption
    //                     _checked={{color:'#1F9DC2', bg:'#E0F9FE', borderRight:'4px solid #2D96D6'}}
    //                     _hover={{bg:'#E0F9FE'}}
    //                     icon={null}
    //                     marginBottom={'10px'}
    //                     value={'a'}
    //                 >Cluster-1</MenuItemOption>
    //                 <MenuItemOption
    //                     _checked={{color:'#1F9DC2', bg:'#E0F9FE', borderRight:'4px solid #2D96D6'}}
    //                     _hover={{bg:'#E0F9FE'}}
    //                     icon={null}
    //                     value={'b'}
    //                 >Cluster-2</MenuItemOption>
    //
    //         </MenuOptionGroup >
    //
    //     </MenuList>
    // </Menu>
  );
};

export default observer(CustomMenu);
